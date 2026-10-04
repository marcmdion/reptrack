import { state } from '../lib/state.js';
import { ensureChartReady } from './chart.js';

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
  let rRem = 0;
  function updateRT() {
    const d = document.getElementById('timer-display');
    const c = document.getElementById('timer-cancel');
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
  document.querySelectorAll('.timer-btn').forEach((b) =>
    b.addEventListener('click', (e) => {
      clearInterval(rT);
      rRem = parseInt(e.target.dataset.time);
      updateRT();
      rT = setInterval(() => {
        rRem--;
        updateRT();
        if (rRem <= 0) {
          clearInterval(rT);
          navigator.vibrate?.([200, 100, 200]);
        }
      }, 1000);
    }),
  );
  document.getElementById('timer-cancel').addEventListener('click', () => {
    clearInterval(rT);
    rRem = 0;
    updateRT();
  });
}
