import { flexRoutines } from '../lib/constants.js';

const GAP_SECONDS = 5; // "get ready" pause between exercises
const DEFAULT_SECONDS = 60;

const TAB_ON = 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-fg text-bg shadow-sm transition-all';
const TAB_OFF = 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-subtle hover:text-fg transition-all';
const TIME_ON = 'flex-timer-btn flex-1 bg-fg text-bg text-xs py-2.5 rounded-full transition-colors font-semibold';
const TIME_OFF = 'flex-timer-btn flex-1 bg-input hover:bg-raised text-muted text-xs py-2.5 rounded-full transition-colors font-medium';

const run = {
  routine: 1,
  seconds: 0, // selected duration, 0 = none picked yet
  index: -1, // exercise being timed
  phase: null, // 'work' | 'gap' | 'done' | null
  endsAt: 0,
  done: new Set(),
  tick: null,
  wakeLock: null,
};

const fmt = (sec) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
const exercises = () => flexRoutines[run.routine];
const remaining = () => Math.max(0, Math.ceil((run.endsAt - Date.now()) / 1000));

async function keepScreenOn(on) {
  try {
    if (on && !run.wakeLock && navigator.wakeLock) {
      run.wakeLock = await navigator.wakeLock.request('screen');
      run.wakeLock.addEventListener('release', () => (run.wakeLock = null));
    } else if (!on && run.wakeLock) {
      await run.wakeLock.release();
      run.wakeLock = null;
    }
  } catch {
    // Not supported or not allowed: timer still works
  }
}

function startPhase(phase, index, seconds) {
  run.phase = phase;
  run.index = index;
  run.endsAt = Date.now() + seconds * 1000;
  clearInterval(run.tick);
  run.tick = setInterval(onTick, 250);
  render();
}

function onTick() {
  if (remaining() > 0) {
    renderTimers();
    return;
  }
  if (run.phase === 'work') {
    run.done.add(run.index);
    navigator.vibrate?.([200, 100, 200]);
    if (run.index + 1 >= exercises().length) {
      finish();
      return;
    }
    startPhase('gap', run.index + 1, GAP_SECONDS);
  } else if (run.phase === 'gap') {
    startPhase('work', run.index, run.seconds);
  }
}

function startAt(index) {
  if (!run.seconds) run.seconds = DEFAULT_SECONDS;
  for (const i of [...run.done]) if (i >= index) run.done.delete(i);
  keepScreenOn(true);
  startPhase('work', index, run.seconds);
}

function finish() {
  clearInterval(run.tick);
  run.phase = 'done';
  run.index = -1;
  keepScreenOn(false);
  render();
}

function stop() {
  clearInterval(run.tick);
  run.phase = null;
  run.index = -1;
  run.done.clear();
  keepScreenOn(false);
  render();
}

// Only update the numbers each tick (cheap); full render on phase changes
function renderTimers() {
  const sec = remaining();
  const live = document.getElementById('flex-row-timer');
  if (live) live.textContent = run.phase === 'gap' ? `Next in ${sec}` : fmt(sec);
  const display = document.getElementById('flex-timer-display');
  if (run.phase === 'work' || run.phase === 'gap') {
    display.textContent = run.phase === 'gap' ? `00:0${sec}` : fmt(sec);
    display.className = `text-3xl font-mono font-light ${run.phase === 'work' ? 'text-accent' : 'text-subtle'} ${
      run.phase === 'work' && sec <= 5 ? 'animate-pulse' : ''
    }`;
  }
}

function render() {
  const running = run.phase === 'work' || run.phase === 'gap';
  const list = exercises();

  document.getElementById('btn-flex-set-1').className = run.routine === 1 ? TAB_ON : TAB_OFF;
  document.getElementById('btn-flex-set-2').className = run.routine === 2 ? TAB_ON : TAB_OFF;
  document.getElementById('flex-set-title').textContent = `Routine ${run.routine}`;
  document.querySelectorAll('.flex-timer-btn').forEach((b) => {
    b.className = Number(b.dataset.time) === run.seconds ? TIME_ON : TIME_OFF;
  });
  document.getElementById('flex-timer-cancel').classList.toggle('hidden', !running);

  const status = document.getElementById('flex-timer-status');
  const display = document.getElementById('flex-timer-display');
  if (running) {
    status.textContent =
      run.phase === 'gap' ? `Get ready: ${list[run.index]}` : `${run.index + 1} / ${list.length} · ${list[run.index]}`;
    status.className = 'text-[10px] text-accent font-medium mt-0.5 truncate max-w-[12rem]';
  } else if (run.phase === 'done') {
    status.textContent = 'Routine complete';
    status.className = 'text-[10px] text-accent font-semibold mt-0.5';
    display.textContent = '00:00';
    display.className = 'text-3xl font-mono text-muted font-light';
  } else {
    status.textContent = 'Pick a time, or tap an exercise';
    status.className = 'text-[10px] text-subtle mt-0.5';
    display.textContent = '00:00';
    display.className = 'text-3xl font-mono text-muted font-light';
  }

  const l = document.getElementById('flex-list');
  l.innerHTML = '';
  list.forEach((ex, i) => {
    const active = running && i === run.index;
    const done = run.done.has(i);
    const row = document.createElement('button');
    row.type = 'button';
    row.className = `w-full flex items-center gap-4 py-3 px-2 -mx-2 text-left border-b last:border-0 transition-colors ${
      active ? `rounded-xl border-transparent ${run.phase === 'work' ? 'bg-accent/10' : 'bg-input'}` : 'border-line-soft'
    }`;
    row.setAttribute('aria-label', `Start timer from ${ex}`);

    const indexSpan = document.createElement('span');
    indexSpan.className = `text-[10px] font-mono w-4 shrink-0 ${active ? 'text-accent' : 'text-faint'}`;
    indexSpan.textContent = i + 1;

    const nameSpan = document.createElement('span');
    nameSpan.className = `flex-1 min-w-0 text-sm font-medium ${
      active ? 'text-fg' : done ? 'text-faint line-through decoration-1' : 'text-fg2'
    }`;
    nameSpan.textContent = ex;
    row.append(indexSpan, nameSpan);

    if (active) {
      const timer = document.createElement('span');
      timer.id = 'flex-row-timer';
      timer.className = `shrink-0 font-semibold ${run.phase === 'work' ? 'font-mono text-sm text-accent' : 'text-xs text-subtle'}`;
      row.append(timer);
    } else if (done) {
      const check = document.createElement('i');
      check.className = 'fa-solid fa-check shrink-0 text-accent text-xs';
      row.append(check);
    }

    row.addEventListener('click', () => startAt(i));
    l.appendChild(row);
  });
  if (running) {
    renderTimers();
    document.getElementById('flex-row-timer')?.closest('button')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function selectRoutine(n) {
  if (run.routine === n) return;
  stop();
  run.routine = n;
  render();
}

export function initMobility() {
  document.getElementById('btn-flex-set-1').addEventListener('click', () => selectRoutine(1));
  document.getElementById('btn-flex-set-2').addEventListener('click', () => selectRoutine(2));
  document.querySelectorAll('.flex-timer-btn').forEach((b) =>
    b.addEventListener('click', () => {
      run.seconds = Number(b.dataset.time);
      startAt(0);
    }),
  );
  document.getElementById('flex-timer-cancel').addEventListener('click', stop);
  // Screen lock is released when the app is hidden; take it back on return
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && (run.phase === 'work' || run.phase === 'gap')) keepScreenOn(true);
  });
  render();
}
