import { state } from '../lib/state.js';
import { armSoftBeep, confirmSoftBeep, disarmSoftBeep } from '../lib/softBeep.js';
import { timerRemainingSeconds } from '../lib/utils.js';
import { ensureChartReady } from './chart.js';

async function maybeNotifyRestComplete() {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  const options = {
    body: 'Ready for your next set',
    tag: 'reptrack-rest',
    renotify: true,
  };
  try {
    const reg = await navigator.serviceWorker?.ready;
    if (reg) await reg.showNotification('Rest complete', options);
    else new Notification('Rest complete', options);
  } catch {
    // Notifications unavailable
  }
}

export function initNavigation() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', async () => {
      document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      document.querySelectorAll('.view-section').forEach((v) => {
        v.classList.add('hidden');
        v.classList.remove('animate-fade-in');
        if (v.id === link.dataset.target) {
          v.classList.remove('hidden');
          v.classList.add('animate-fade-in');
        }
      });
      if (link.dataset.target === 'view-progress') {
        await ensureChartReady();
        if (state.chartInstance) state.chartInstance.resize();
      }
    });
  });

  let rT = null;
  let rEndsAt = 0;
  let restRunning = false;
  let wallRestTimeout = null;

  function clearRestWallClock() {
    if (wallRestTimeout != null) {
      clearTimeout(wallRestTimeout);
      wallRestTimeout = null;
    }
  }

  function scheduleRestWallClock() {
    clearRestWallClock();
    wallRestTimeout = setTimeout(completeRestTimer, Math.max(0, rEndsAt - Date.now()));
  }

  function updateRT() {
    const d = document.getElementById('timer-display');
    const c = document.getElementById('timer-cancel');
    const rRem = timerRemainingSeconds(rEndsAt);
    if (rRem <= 0) {
      d.textContent = '00:00';
      d.className = 'text-xl font-mono text-muted';
      c.classList.add('hidden');
      return;
    }
    d.textContent = `${Math.floor(rRem / 60)
      .toString()
      .padStart(2, '0')}:${(rRem % 60).toString().padStart(2, '0')}`;
    d.className = `text-xl font-mono text-accent ${rRem <= 5 ? 'animate-pulse' : ''}`;
    c.classList.remove('hidden');
  }

  function completeRestTimer() {
    if (!restRunning) return;
    if (timerRemainingSeconds(rEndsAt) > 0) return;
    restRunning = false;
    clearInterval(rT);
    rT = null;
    clearRestWallClock();
    rEndsAt = 0;
    navigator.vibrate?.([200, 100, 200]);
    confirmSoftBeep();
    maybeNotifyRestComplete();
    updateRT();
  }

  function onRTTick() {
    updateRT();
    if (timerRemainingSeconds(rEndsAt) <= 0) completeRestTimer();
  }

  document.querySelectorAll('.timer-btn').forEach((b) =>
    b.addEventListener('click', (e) => {
      clearInterval(rT);
      clearRestWallClock();
      restRunning = false;
      disarmSoftBeep();
      const seconds = parseInt(e.currentTarget.dataset.time, 10);
      rEndsAt = Date.now() + seconds * 1000;
      restRunning = true;
      armSoftBeep(rEndsAt);
      scheduleRestWallClock();
      updateRT();
      rT = setInterval(onRTTick, 250);
    }),
  );
  document.getElementById('timer-cancel').addEventListener('click', () => {
    restRunning = false;
    clearInterval(rT);
    rT = null;
    clearRestWallClock();
    rEndsAt = 0;
    disarmSoftBeep();
    updateRT();
  });
  document.addEventListener('visibilitychange', () => {
    if (restRunning && document.visibilityState === 'visible') onRTTick();
  });
}
