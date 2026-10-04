import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { getLocalDateId, showToast } from '../lib/utils.js';
import {
  PROGRAM_ID,
  dayKeyForDate,
  defaultStartDateId,
  getDayPlan,
  nextRepState,
  nextTarget,
  pastSessions,
  programDays,
  weekNumber,
  weekSchedule,
  weightStep,
} from '../lib/program.js';
import { getSelectedLogDateId, saveSessionName } from './sessions.js';

const REST_SECONDS = 90;
const DAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

let startDateId = null;
let dayOverride = null; // { dateId, dayKey } when the user picks a different workout for a date
const weightOverrides = {}; // `${dateId}|${exercise}` -> weight
const pending = new Set();

const settingsRef = () => doc(db, 'users', state.currentUser.uid, 'settings', 'program');
const workoutsRef = () => collection(db, 'users', state.currentUser.uid, 'workouts');
const dateIdOf = (w) => (w.timestamp ? getLocalDateId(w.timestamp.toDate()) : null);

export async function loadProgramSettings() {
  if (!state.currentUser) return;
  try {
    const snap = await getDoc(settingsRef());
    startDateId = snap.exists() ? snap.data().startDate : null;
    if (!startDateId) {
      startDateId = defaultStartDateId(getLocalDateId());
      await setDoc(settingsRef(), { startDate: startDateId }, { merge: true });
    }
  } catch {
    startDateId = startDateId || defaultStartDateId(getLocalDateId());
  }
  renderPlan();
}

function currentDayKey(dateId) {
  if (dayOverride?.dateId === dateId) return dayOverride.dayKey;
  // If a program day was already logged on this date, show that one
  const logged = state.workoutsCache.find((w) => w.program === PROGRAM_ID && dateIdOf(w) === dateId);
  if (logged?.programDay) return logged.programDay;
  return dayKeyForDate(dateId);
}

function formatKg(weight, each) {
  if (weight === 'BW') return 'BW';
  const n = Number(weight);
  return `${Number.isInteger(n) ? n : n.toFixed(1)}kg${each ? ' ea' : ''}`;
}

function todaysDocs(dateId, exercise) {
  return state.workoutsCache.filter(
    (w) => w.program === PROGRAM_ID && w.exercise === exercise && dateIdOf(w) === dateId,
  );
}

function targetFor(item, dateId) {
  const docs = todaysDocs(dateId, item.name);
  const computed = nextTarget(item, pastSessions(state.workoutsCache, item.name, dateId, dateIdOf));
  if (docs.length) return { ...computed, weight: docs[0].weight, reps: docs[0].targetReps || computed.reps };
  const key = `${dateId}|${item.name}`;
  if (key in weightOverrides) return { ...computed, weight: weightOverrides[key] };
  return computed;
}

function logDate(dateId, offset) {
  const [y, m, d] = dateId.split('-').map(Number);
  // Noon like manual logs; tiny offset keeps sets in order
  return new Date(y, m - 1, d, 12, 0, offset);
}

async function ensureSessionName(dateId, label) {
  if (state.sessionsCache[dateId]) return;
  try {
    await saveSessionName(dateId, label);
  } catch {
    // non-critical
  }
}

function startRestTimer() {
  document.querySelector(`.timer-btn[data-time="${REST_SECONDS}"]`)?.click();
}

async function withPending(key, fn) {
  if (pending.has(key)) return;
  pending.add(key);
  try {
    await fn();
  } catch {
    showToast('Error saving', true);
  } finally {
    pending.delete(key);
  }
}

function onSetTap(plan, item, itemIndex, setIndex, dateId, target) {
  const existing = todaysDocs(dateId, item.name).find((w) => w.setIndex === setIndex);
  const next = nextRepState(existing ? existing.reps : null, target.reps);
  withPending(`${dateId}|${item.name}|${setIndex}`, async () => {
    if (!existing) {
      await addDoc(workoutsRef(), {
        exercise: item.name,
        weight: target.weight,
        reps: next,
        setCount: 1,
        timestamp: logDate(dateId, itemIndex),
        dateStr: logDate(dateId, 0).toLocaleDateString(),
        program: PROGRAM_ID,
        programDay: plan.key,
        setIndex,
        targetSets: item.sets,
        targetReps: target.reps,
      });
      if (!item.supersetFirst) startRestTimer();
      ensureSessionName(dateId, plan.label);
    } else if (next == null) {
      await deleteDoc(doc(workoutsRef(), existing.id));
    } else {
      await updateDoc(doc(workoutsRef(), existing.id), { reps: next });
    }
  });
}

function onCardioTap(plan, item, itemIndex, dateId) {
  const existing = todaysDocs(dateId, item.name)[0];
  withPending(`${dateId}|${item.name}`, async () => {
    if (existing) {
      await deleteDoc(doc(workoutsRef(), existing.id));
      return;
    }
    await addDoc(workoutsRef(), {
      exercise: item.name,
      weight: item.minutes,
      reps: 0,
      setCount: 1,
      timestamp: logDate(dateId, itemIndex),
      dateStr: logDate(dateId, 0).toLocaleDateString(),
      program: PROGRAM_ID,
      programDay: plan.key,
    });
    ensureSessionName(dateId, plan.label);
  });
}

function onWeightChange(item, dateId, current, direction) {
  const step = weightStep(item);
  const next = Math.max(0, Number(current) + direction * step);
  weightOverrides[`${dateId}|${item.name}`] = next;
  const docs = todaysDocs(dateId, item.name);
  if (docs.length) {
    withPending(`${dateId}|${item.name}|weight`, () =>
      Promise.all(docs.map((w) => updateDoc(doc(workoutsRef(), w.id), { weight: next }))),
    );
  } else {
    renderPlan();
  }
}

const REASON_TEXT = {
  start: { text: 'Start weight', cls: 'text-gray-500' },
  up: { text: 'Weight up', cls: 'text-[#00E676]' },
  reps: { text: '+1 rep', cls: 'text-[#00E676]' },
  same: { text: 'Same as last time', cls: 'text-gray-500' },
  deload: { text: 'Deload -10%', cls: 'text-amber-400' },
  bw: { text: '', cls: '' },
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function setCircle(reps, targetReps, label) {
  const btn = el('button');
  btn.type = 'button';
  btn.setAttribute('aria-label', label);
  const base =
    'w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition active:scale-95 select-none';
  if (reps == null) {
    btn.className = `${base} bg-[#111] border border-[#222] text-gray-600`;
  } else if (reps >= targetReps) {
    btn.className = `${base} bg-[#00E676] text-black`;
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
  } else {
    btn.className = `${base} bg-amber-500/20 border border-amber-500/50 text-amber-300`;
    btn.textContent = reps;
  }
  return btn;
}

function renderLiftRow(plan, item, index, liftNumber, dateId) {
  const row = el('div', 'py-4 border-b border-[#111] last:border-0');
  const target = targetFor(item, dateId);
  const docs = todaysDocs(dateId, item.name);

  const top = el('div', 'flex justify-between items-start gap-3');
  const info = el('div', 'min-w-0');
  info.append(el('div', 'text-sm font-semibold text-gray-100', `${liftNumber}. ${item.name}`));

  const meta = el('div', 'text-[10px] mt-1 flex flex-wrap gap-x-2');
  meta.append(el('span', 'text-gray-400 font-mono', `${item.sets} × ${target.reps}${item.note ? ` (${item.note})` : ''}`));
  const reason = REASON_TEXT[target.reason];
  if (reason?.text) meta.append(el('span', reason.cls, reason.text));
  if (item.superset) {
    const text = item.supersetFirst ? `No rest, go to ${item.superset}` : `Superset w/ ${item.superset}`;
    meta.append(el('span', 'text-sky-400', text));
  }
  info.append(meta);
  top.append(info);

  if (target.weight !== 'BW') {
    const weightBox = el('div', 'flex items-center gap-1 shrink-0');
    const minus = el('button', 'w-8 h-8 rounded-full bg-[#111] text-gray-400 hover:text-white text-xs');
    minus.type = 'button';
    minus.innerHTML = '<i class="fa-solid fa-minus"></i>';
    minus.setAttribute('aria-label', `Lower ${item.name} weight`);
    minus.onclick = () => onWeightChange(item, dateId, target.weight, -1);
    const plus = el('button', 'w-8 h-8 rounded-full bg-[#111] text-gray-400 hover:text-white text-xs');
    plus.type = 'button';
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>';
    plus.setAttribute('aria-label', `Raise ${item.name} weight`);
    plus.onclick = () => onWeightChange(item, dateId, target.weight, 1);
    weightBox.append(minus, el('span', 'text-sm font-bold text-white w-[4.5rem] text-center', formatKg(target.weight, item.each)), plus);
    top.append(weightBox);
  } else {
    top.append(el('span', 'text-sm font-bold text-white shrink-0', 'BW'));
  }
  row.append(top);

  const circles = el('div', 'flex gap-3 mt-3');
  for (let s = 0; s < item.sets; s++) {
    const d = docs.find((w) => w.setIndex === s);
    const btn = setCircle(d ? d.reps : null, target.reps, `${item.name} set ${s + 1}`);
    btn.onclick = () => onSetTap(plan, item, index, s, dateId, target);
    circles.append(btn);
  }
  row.append(circles);
  return { row, done: docs.filter((w) => w.setIndex < item.sets).length, total: item.sets };
}

function renderCardioRow(plan, item, index, dateId) {
  const row = el('div', 'py-4 border-b border-[#111] last:border-0 flex justify-between items-center gap-3');
  const info = el('div');
  info.append(el('div', 'text-sm font-semibold text-gray-100', item.name));
  info.append(el('div', 'text-[10px] text-gray-400 font-mono mt-1', `${item.minutes} min`));
  const done = todaysDocs(dateId, item.name).length > 0;
  const btn = setCircle(done ? 1 : null, 1, `${item.name} done`);
  btn.onclick = () => onCardioTap(plan, item, index, dateId);
  row.append(info, btn);
  return { row, done: done ? 1 : 0, total: 1 };
}

function renderDayPicker(container, dateId, activeKey) {
  const picker = el('div', 'grid grid-cols-7 gap-1 mb-4');
  const naturalKey = dayKeyForDate(dateId);
  weekSchedule.forEach((key, dow) => {
    // Show Monday first
    const order = (dow + 6) % 7;
    const btn = el('button', '', null);
    btn.type = 'button';
    btn.style.order = String(order);
    const active = key === activeKey;
    const isNatural = key === naturalKey;
    btn.className = `flex flex-col items-center py-1.5 rounded-xl text-[9px] font-semibold uppercase tracking-wide transition ${
      active ? 'bg-white text-black' : isNatural ? 'bg-[#111] text-white' : 'bg-[#0a0a0a] text-gray-500 hover:text-white'
    }`;
    btn.append(el('span', 'text-[11px]', DAY_LETTERS[dow]));
    btn.append(el('span', 'opacity-70 normal-case', programDays[key].label.replace('Upper ', 'Up ').replace('Lower ', 'Lo ')));
    btn.onclick = () => {
      dayOverride = { dateId, dayKey: key };
      renderPlan();
    };
    picker.append(btn);
  });
  container.append(picker);
}

function renderStartDateEditor(container) {
  const wrap = el('div', 'flex items-center justify-between gap-2 mb-4 text-[10px] text-gray-500');
  wrap.append(el('span', 'uppercase tracking-widest font-semibold', 'Program start'));
  const input = el('input', 'bg-[#111] text-white text-xs rounded-full px-3 py-1 focus:outline-none');
  input.type = 'date';
  input.value = startDateId;
  input.onchange = async () => {
    if (!input.value) return;
    startDateId = input.value;
    renderPlan();
    try {
      await setDoc(settingsRef(), { startDate: startDateId }, { merge: true });
    } catch {
      showToast('Error saving start date', true);
    }
  };
  wrap.append(input);
  container.append(wrap);
}

let showStartEditor = false;

export function renderPlan() {
  const container = document.getElementById('plan-body');
  const titleEl = document.getElementById('plan-title');
  const weekEl = document.getElementById('plan-week');
  if (!container || !state.currentUser || !startDateId) return;

  const dateId = getSelectedLogDateId();
  const dayKey = currentDayKey(dateId);
  const week = weekNumber(startDateId, dateId);
  const beforeStart = dateId < startDateId;
  const plan = getDayPlan(dayKey, week);

  titleEl.textContent = plan.label;
  weekEl.textContent = beforeStart ? 'Not started' : `Week ${week}`;

  container.innerHTML = '';
  renderDayPicker(container, dateId, dayKey);
  if (showStartEditor) renderStartDateEditor(container);

  if (dayKey === 'rest') {
    container.append(el('div', 'text-center py-6 text-gray-500 text-sm', 'Rest day. Recover, eat, sleep.'));
    container.append(el('div', 'text-center text-[10px] text-gray-600', 'Missed a day? Pick it above.'));
    return;
  }

  const progress = el('div', 'flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold mb-1');
  container.append(progress);
  if (plan.note) container.append(el('div', 'text-[10px] text-sky-400 mb-1', plan.note));

  const list = el('div');
  let done = 0;
  let total = 0;
  let liftNumber = 0;
  plan.items.forEach((item, i) => {
    const r = item.cardio
      ? renderCardioRow(plan, item, i, dateId)
      : renderLiftRow(plan, item, i, ++liftNumber, dateId);
    done += r.done;
    total += r.total;
    list.append(r.row);
  });
  container.append(list);

  const finished = total > 0 && done >= total;
  progress.append(el('span', finished ? 'text-[#00E676]' : 'text-gray-500', finished ? 'Session complete' : `${done} / ${total} done`));
  progress.append(el('span', 'text-gray-600 normal-case tracking-normal', 'Tap = done. Tap again = fewer reps.'));
}

export function initPlan() {
  document.getElementById('plan-week')?.addEventListener('click', (e) => {
    e.stopPropagation();
    showStartEditor = !showStartEditor;
    renderPlan();
  });
  document.getElementById('input-date')?.addEventListener('change', () => {
    dayOverride = null;
    renderPlan();
  });
}
