import { addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { getLocalDateId, showToast } from '../lib/utils.js';
import {
  PROGRAM_ID,
  dayKeyForDate,
  defaultStartDateId,
  getDayPlan,
  nextTarget,
  lastSessionSets,
  pastSessions,
  programDays,
  weekNumber,
  weekSchedule,
  stepWeight,
} from '../lib/program.js';
import { getSelectedLogDateId, saveSessionName } from './sessions.js';

const REST_SECONDS = 90;
const DAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

let startDateId = null;
let dayOverride = null; // { dateId, dayKey } when the user picks a different workout for a date
const weightOverrides = new Map();
const pending = new Set();
let lastSetUndo;

const settingsRef = () => doc(db, 'users', state.currentUser.uid, 'settings', 'program');
const workoutsRef = () => collection(db, 'users', state.currentUser.uid, 'workouts');
const dateIdOf = (w) => (w.timestamp ? getLocalDateId(w.timestamp.toDate()) : null);

export async function loadProgramSettings() {
  if (!state.currentUser) return;
  // ponytail: render with a local default first — don't block UI on Firestore get/set
  if (!startDateId) {
    startDateId = defaultStartDateId(getLocalDateId());
    renderPlan();
  }
  try {
    const snap = await getDoc(settingsRef());
    const remote = snap.exists() ? snap.data().startDate : null;
    if (remote) {
      if (remote !== startDateId) {
        startDateId = remote;
        renderPlan();
      }
      return;
    }
    await setDoc(settingsRef(), { startDate: startDateId }, { merge: true });
  } catch {
    renderPlan();
  }
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

function exerciseKey(dateId, exercise) {
  return `${state.currentUser.uid}|${dateId}|${exercise}`;
}

function targetFor(item, dateId, docs) {
  const computed = nextTarget(item, pastSessions(state.workoutsCache, item.name, dateId, dateIdOf));
  const lastSet = docs.at(-1);
  const recordedPlan = docs.findLast((set) => set.plannedWeight != null);
  const savedWeight = recordedPlan?.plannedWeight ?? lastSet?.weight ?? computed.weight;
  const weight = weightOverrides.get(exerciseKey(dateId, item.name)) ?? savedWeight;
  return { ...computed, weight, savedWeight, reps: lastSet?.targetReps ?? computed.reps };
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

async function withPending(key, fn, onError = () => showToast('Error saving', true)) {
  if (pending.has(key)) return false;
  pending.add(key);
  try {
    await fn();
    return true;
  } catch {
    onError();
    return false;
  } finally {
    pending.delete(key);
  }
}

function logSet(plan, item, itemIndex, setIndex, dateId, target, key) {
  const existing = todaysDocs(dateId, item.name).some((w) => w.setIndex === setIndex);
  if (existing) return;
  const uid = state.currentUser.uid;
  withPending(key, async () => {
    const ref = await addDoc(workoutsRef(), {
      exercise: item.name,
      weight: target.weight,
      plannedWeight: target.weight,
      reps: target.reps,
      setCount: 1,
      timestamp: logDate(dateId, itemIndex),
      dateStr: logDate(dateId, 0).toLocaleDateString(),
      program: PROGRAM_ID,
      programDay: plan.key,
      setIndex,
      targetSets: item.sets,
      targetReps: target.reps,
    });
    if (state.currentUser?.uid !== uid) return;
    if (!item.supersetFirst) startRestTimer();
    ensureSessionName(dateId, plan.label);
    lastSetUndo?.dismiss();
    lastSetUndo = {
      id: ref.id,
      dismiss: showToast(`Set ${setIndex + 1} logged`, false, {
        label: 'Undo',
        run: () => {
          const logged = state.workoutsCache.find((w) => w.id === ref.id);
          if (state.currentUser?.uid !== uid || logged?.weight !== target.weight || logged?.reps !== target.reps) return;
          withPending(key, async () => {
            await deleteDoc(ref);
            showToast('Set removed');
          });
        },
      }),
    };
  });
}

function editSet(item, set, key, chipId, savedWeight) {
  if (pending.has(key)) return;
  const uid = state.currentUser.uid;
  const ref = doc(workoutsRef(), set.id);
  const dialog = document.getElementById('plan-set-editor');
  const form = document.getElementById('plan-set-form');
  const weight = document.getElementById('plan-set-weight');
  const reps = document.getElementById('plan-set-reps');
  const save = document.getElementById('plan-set-save');
  const remove = document.getElementById('plan-set-remove');
  const cancel = document.getElementById('plan-set-cancel');
  const error = document.getElementById('plan-set-editor-error');
  const bodyweight = item.equip === 'bw';
  document.getElementById('plan-set-editor-details').textContent = `${item.name} · Set ${set.setIndex + 1}`;
  document.getElementById('plan-set-weight-label').textContent = bodyweight ? 'Load' : item.each ? 'Load (kg each)' : 'Load (kg)';
  weight.type = bodyweight ? 'text' : 'number';
  weight.readOnly = bodyweight;
  weight.min = '0';
  weight.step = '0.1';
  weight.inputMode = 'decimal';
  weight.value = set.weight;
  reps.value = set.reps;
  error.textContent = '';

  async function writeSet(change, successMessage) {
    if (state.currentUser?.uid !== uid) {
      dialog.close();
      return;
    }
    save.disabled = remove.disabled = cancel.disabled = true;
    error.textContent = '';
    const saved = await withPending(key, change, () => {
      error.textContent = 'Could not update this set. Try again.';
    });
    save.disabled = remove.disabled = cancel.disabled = false;
    if (!saved) return;
    if (lastSetUndo?.id === set.id) lastSetUndo.dismiss();
    dialog.close();
    showToast(successMessage);
  }

  form.onsubmit = (event) => {
    event.preventDefault();
    writeSet(() => updateDoc(ref, {
      weight: bodyweight ? set.weight : weight.valueAsNumber,
      reps: reps.valueAsNumber,
      // Older sets stored only the actual weight, so retain the current saved plan on first edit.
      plannedWeight: set.plannedWeight ?? savedWeight,
    }), 'Set updated');
  };
  remove.onclick = () => writeSet(() => deleteDoc(ref), 'Set removed');
  cancel.onclick = () => dialog.close();
  dialog.oncancel = (event) => {
    if (pending.has(key)) event.preventDefault();
  };
  dialog.onclose = () => document.getElementById(chipId)?.focus();
  dialog.showModal();
  if (bodyweight) reps.focus();
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
  weightOverrides.set(exerciseKey(dateId, item.name), stepWeight(item, current, direction));
  renderPlan();
}

const REASON_TEXT = {
  start: { text: 'Start weight', cls: 'text-subtle' },
  up: { text: 'Weight up', cls: 'text-accent' },
  reps: { text: '+1 rep', cls: 'text-accent' },
  same: { text: 'Same as last time', cls: 'text-subtle' },
  deload: { text: 'Deload -10%', cls: 'text-warn' },
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
    btn.className = `${base} bg-input border border-raised text-faint`;
  } else if (reps === targetReps) {
    btn.className = `${base} bg-accent text-on-accent`;
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
  } else {
    btn.className = `${base} ${reps > targetReps ? 'bg-accent text-on-accent' : 'bg-amber-500/20 border border-amber-500/50 text-warn'}`;
    btn.textContent = reps;
  }
  return btn;
}

function renderLiftRow(plan, item, index, liftNumber, dateId) {
  const row = el('div', 'py-4 border-b border-line-soft last:border-0');
  const docs = todaysDocs(dateId, item.name).sort((a, b) => a.setIndex - b.setIndex);
  const target = targetFor(item, dateId, docs);
  const sets = Array.from({ length: item.sets }, (_, index) => docs.find((set) => set.setIndex === index));
  const allSetsLogged = sets.every(Boolean);

  const top = el('div', 'flex justify-between items-start gap-3');
  const info = el('div', 'min-w-0');
  info.append(el('div', 'text-sm font-semibold text-fg2', `${liftNumber}. ${item.name}`));

  const meta = el('div', 'text-[10px] mt-1 flex flex-wrap gap-x-2');
  meta.append(el('span', 'text-muted font-mono', `${item.sets} × ${target.reps}${item.note ? ` (${item.note})` : ''}`));
  const reason = REASON_TEXT[target.reason];
  if (reason?.text) meta.append(el('span', reason.cls, reason.text));
  if (item.superset) {
    const text = item.supersetFirst ? `No rest, go to ${item.superset}` : `Superset w/ ${item.superset}`;
    meta.append(el('span', 'text-info', text));
  }
  info.append(meta);
  top.append(info);

  const rightCol = el('div', 'flex flex-col items-end shrink-0 gap-1.5');
  if (!allSetsLogged && target.weight !== 'BW') {
    const weightBox = el('div', 'flex items-center gap-1');
    const minus = el('button', 'w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs');
    minus.type = 'button';
    minus.innerHTML = '<i class="fa-solid fa-minus"></i>';
    minus.setAttribute('aria-label', `Lower ${item.name} next set weight`);
    minus.onclick = () => onWeightChange(item, dateId, target.weight, -1);
    const plus = el('button', 'w-8 h-8 rounded-full bg-input text-muted hover:text-fg text-xs');
    plus.type = 'button';
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>';
    plus.setAttribute('aria-label', `Raise ${item.name} next set weight`);
    plus.onclick = () => onWeightChange(item, dateId, target.weight, 1);
    weightBox.append(minus, el('span', 'text-sm font-bold text-fg w-[4.5rem] text-center', formatKg(target.weight, item.each)), plus);
    rightCol.append(el('span', 'text-[9px] uppercase tracking-widest text-subtle', 'Next set'), weightBox);
  } else if (!allSetsLogged) {
    rightCol.append(el('span', 'text-sm font-bold text-fg', 'BW'));
  }

  const last = lastSessionSets(state.workoutsCache, item.name, dateId, dateIdOf, 3);
  if (last) {
    const lastBox = el('div', 'text-right max-w-[5.5rem]');
    lastBox.append(el('div', 'text-[9px] uppercase tracking-widest text-faint font-semibold', 'Last'));
    const mixedLoads = last.weights.some((weight) => weight !== last.weight);
    if (!mixedLoads && last.weight !== 'BW') {
      lastBox.append(
        el('div', 'text-[10px] text-subtle font-mono leading-tight', formatKg(last.weight, item.each)),
      );
    }
    if (mixedLoads) {
      last.reps.forEach((reps, i) => {
        lastBox.append(el('div', 'text-[10px] text-muted font-mono leading-tight', `${formatKg(last.weights[i], item.each)} × ${reps}`));
      });
    } else {
      lastBox.append(el('div', 'text-[10px] text-muted font-mono leading-tight', last.reps.join(' · ')));
    }
    rightCol.append(lastBox);
  }

  top.append(rightCol);
  row.append(top);

  const circles = el('div', 'flex gap-3 mt-3');
  let done = 0;
  sets.forEach((d, s) => {
    const label = `${item.name} set ${s + 1}`;
    const key = `${exerciseKey(dateId, item.name)}|${s}`;
    const btn = setCircle(d?.reps, target.reps, d
      ? `Edit ${label}, ${formatKg(d.weight, item.each)}, ${d.reps} reps`
      : `Log ${label}, ${formatKg(target.weight, item.each)}, ${target.reps} reps`);
    btn.id = `plan-${plan.key}-${index}-set-${s}`;
    if (d) {
      done++;
      btn.title = `${formatKg(d.weight, item.each)} × ${d.reps}`;
      btn.onclick = () => editSet(item, d, key, btn.id, target.savedWeight);
    } else {
      btn.onclick = () => logSet(plan, item, index, s, dateId, target, key);
    }
    circles.append(btn);
  });
  row.append(circles);
  return { row, done, total: item.sets };
}

function renderCardioRow(plan, item, index, dateId) {
  const row = el('div', 'py-4 border-b border-line-soft last:border-0 flex justify-between items-center gap-3');
  const info = el('div');
  info.append(el('div', 'text-sm font-semibold text-fg2', item.name));
  info.append(el('div', 'text-[10px] text-muted font-mono mt-1', `${item.minutes} min`));
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
      active ? 'bg-fg text-bg' : isNatural ? 'bg-input text-fg' : 'bg-surface text-subtle hover:text-fg'
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
  const wrap = el('div', 'flex items-center justify-between gap-2 mb-4 text-[10px] text-subtle');
  wrap.append(el('span', 'uppercase tracking-widest font-semibold', 'Program start'));
  const input = el('input', 'bg-input text-fg text-xs rounded-full px-3 py-1 focus:outline-none');
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
  if (!container || !titleEl || !weekEl) return;
  if (!state.currentUser) {
    container.innerHTML =
      '<div class="text-center py-6 text-subtle text-sm">Sign in to see today\'s plan.</div>';
    titleEl.textContent = '—';
    weekEl.textContent = 'Week —';
    return;
  }
  if (!startDateId) return;

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
    container.append(el('div', 'text-center py-6 text-subtle text-sm', 'Rest day. Recover, eat, sleep.'));
    container.append(el('div', 'text-center text-[10px] text-faint', 'Missed a day? Pick it above.'));
    return;
  }

  const progress = el('div', 'flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold mb-1');
  container.append(progress);
  if (plan.note) container.append(el('div', 'text-[10px] text-info mb-1', plan.note));

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
  progress.append(el('span', finished ? 'text-accent' : 'text-subtle', finished ? 'Session complete' : `${done} / ${total} done`));
  if (plan.items.some((item) => !item.cardio)) {
    progress.append(el('span', 'text-faint normal-case tracking-normal', 'Tap a completed set to edit.'));
  }
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
