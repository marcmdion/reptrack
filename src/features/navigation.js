import { state } from '../lib/state.js';
import {
  cancelRestAlarmInServiceWorker,
  canPromptRestNotifications,
  requestRestNotificationPermission,
  restNotificationsEnabled,
  syncRestAlarmToServiceWorker,
} from '../lib/restAlarmSw.js';
import { armRestCountdown, disarmRestCountdown, restCountdownBeepsFinished } from '../lib/restCountdownAudio.js';
import { armSoftBeep, confirmSoftBeep, disarmSoftBeep } from '../lib/softBeep.js';
import { timerRemainingSeconds } from '../lib/utils.js';
import { ensureChartReady } from './chart.js';

async function maybeNotifyRestComplete() {
  if (!restNotificationsEnabled()) return;
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

function updateRestNotifyUi() {
  const btn = document.getElementById('timer-notify-enable');
  if (!btn) return;
  if (canPromptRestNotifications()) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
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
  let restUsesMedia = false;

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
      if (!restRunning) c.classList.add('hidden');
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
    if (restUsesMedia && timerRemainingSeconds(rEndsAt) > 0) return;
    restRunning = false;
    restUsesMedia = false;
    clearInterval(rT);
    rT = null;
    clearRestWallClock();
    rEndsAt = 0;
    void cancelRestAlarmInServiceWorker();
    disarmRestCountdown();
    if (!restCountdownBeepsFinished()) confirmSoftBeep();
    else disarmSoftBeep();
    navigator.vibrate?.([200, 100, 200]);
    void maybeNotifyRestComplete();
    updateRT();
    const cancelBtn = document.getElementById('timer-cancel');
    cancelBtn?.classList.add('hidden');
  }

  function onRTTick() {
    updateRT();
    if (!restUsesMedia && timerRemainingSeconds(rEndsAt) <= 0) completeRestTimer();
  }

  async function startRestTimer(seconds) {
    clearInterval(rT);
    clearRestWallClock();
    restRunning = false;
    restUsesMedia = false;
    disarmRestCountdown();
    disarmSoftBeep();
    void cancelRestAlarmInServiceWorker();

    rEndsAt = Date.now() + seconds * 1000;
    restRunning = true;

    const mediaOk = await armRestCountdown(seconds, { onBeepsFinished: () => completeRestTimer() });
    if (mediaOk) {
      restUsesMedia = true;
    } else {
      armSoftBeep(rEndsAt);
      scheduleRestWallClock();
      void syncRestAlarmToServiceWorker(rEndsAt);
    }

    updateRT();
    rT = setInterval(onRTTick, 250);
  }

  document.querySelectorAll('.timer-btn').forEach((b) =>
    b.addEventListener('click', (e) => {
      const seconds = parseInt(e.currentTarget.dataset.time, 10);
      void startRestTimer(seconds);
    }),
  );
  document.getElementById('timer-cancel').addEventListener('click', () => {
    restRunning = false;
    restUsesMedia = false;
    clearInterval(rT);
    rT = null;
    clearRestWallClock();
    rEndsAt = 0;
    disarmRestCountdown();
    disarmSoftBeep();
    void cancelRestAlarmInServiceWorker();
    updateRT();
  });

  document.getElementById('timer-notify-enable')?.addEventListener('click', async () => {
    const result = await requestRestNotificationPermission();
    updateRestNotifyUi();
    if (result === 'granted') {
      const reg = await navigator.serviceWorker?.ready;
      await reg?.showNotification('Rest alerts enabled', {
        body: 'You will get a notification when rest ends if audio is blocked.',
        tag: 'reptrack-rest-setup',
      });
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (restRunning && document.visibilityState === 'visible') onRTTick();
  });

  updateRestNotifyUi();
}
