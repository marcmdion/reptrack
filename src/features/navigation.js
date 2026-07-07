import { flexRoutines } from '../lib/constants.js';
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
      d.className = 'text-xl font-mono text-gray-400';
      c.classList.add('hidden');
      return;
    }
    d.textContent = `${Math.floor(rRem / 60)
      .toString()
      .padStart(2, '0')}:${(rRem % 60).toString().padStart(2, '0')}`;
    d.className = `text-xl font-mono text-[#00E676] ${rRem <= 5 ? 'animate-pulse' : ''}`;
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

  const bF1 = document.getElementById('btn-flex-set-1');
  const bF2 = document.getElementById('btn-flex-set-2');
  function rFlex(s) {
    bF1.className =
      s === 1
        ? 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-white text-black shadow-sm transition-all'
        : 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-gray-500 hover:text-white transition-all';
    bF2.className =
      s === 2
        ? 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full bg-white text-black shadow-sm transition-all'
        : 'flex-1 py-2.5 text-xs tracking-wide font-semibold rounded-full text-gray-500 hover:text-white transition-all';
    document.getElementById('flex-set-title').textContent = `Routine ${s}`;
    const l = document.getElementById('flex-list');
    l.innerHTML = '';
    flexRoutines[s].forEach((ex, i) => {
      const row = document.createElement('div');
      row.className = 'flex items-center gap-4 py-3 border-b border-[#111] last:border-0';
      const indexSpan = document.createElement('span');
      indexSpan.className = 'text-gray-600 text-[10px] font-mono w-4';
      indexSpan.textContent = i + 1;
      const nameSpan = document.createElement('span');
      nameSpan.className = 'text-sm font-medium text-gray-200';
      nameSpan.textContent = ex;
      row.append(indexSpan, nameSpan);
      l.appendChild(row);
    });
  }
  bF1.addEventListener('click', () => rFlex(1));
  bF2.addEventListener('click', () => rFlex(2));
  rFlex(1);

  let fT = null;
  let fTO = null;
  let fRem = 0;
  let fSel = 0;
  function uFT() {
    const d = document.getElementById('flex-timer-display');
    const c = document.getElementById('flex-timer-cancel');
    const st = document.getElementById('flex-timer-status');
    if (fRem <= 0 && !fSel) {
      d.textContent = '00:00';
      d.className = 'text-3xl font-mono text-gray-400 font-light';
      c.classList.add('hidden');
      st.classList.add('hidden');
      return;
    }
    d.textContent = `${Math.floor(fRem / 60)
      .toString()
      .padStart(2, '0')}:${(fRem % 60).toString().padStart(2, '0')}`;
    d.className = `text-3xl font-mono text-white font-light ${fRem > 0 && fRem <= 5 ? 'animate-pulse' : ''}`;
    c.classList.remove('hidden');
  }
  function sFT(sec) {
    clearInterval(fT);
    clearTimeout(fTO);
    document.getElementById('flex-timer-status').classList.add('hidden');
    fSel = sec;
    fRem = sec;
    uFT();
    fT = setInterval(() => {
      fRem--;
      uFT();
      if (fRem <= 0) {
        clearInterval(fT);
        document.getElementById('flex-timer-display').classList.remove('animate-pulse');
        navigator.vibrate?.([200, 100, 200]);
        document.getElementById('flex-timer-status').classList.remove('hidden');
        fTO = setTimeout(() => {
          if (fSel) sFT(fSel);
        }, 5000);
      }
    }, 1000);
  }
  document.querySelectorAll('.flex-timer-btn').forEach((b) =>
    b.addEventListener('click', (e) => sFT(parseInt(e.target.dataset.time))),
  );
  document.getElementById('flex-timer-cancel').addEventListener('click', () => {
    clearInterval(fT);
    clearTimeout(fTO);
    fRem = 0;
    fSel = 0;
    uFT();
    document.getElementById('flex-timer-status').classList.add('hidden');
  });
}
