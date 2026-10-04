import { applyChartTheme } from './chart.js';

const STORAGE_KEY = 'reptrack-theme';
const THEMES = {
  dark: { next: 'stone', icon: 'fa-sun', label: 'Switch to Stone theme', meta: '#000000' },
  stone: { next: 'dark', icon: 'fa-moon', label: 'Switch to Dark theme', meta: '#E9E6DF' },
};

export function getTheme() {
  return document.documentElement.dataset.theme === 'stone' ? 'stone' : 'dark';
}

function applyTheme(theme) {
  const t = THEMES[theme] ? theme : 'dark';
  if (t === 'stone') document.documentElement.dataset.theme = 'stone';
  else delete document.documentElement.dataset.theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEMES[t].meta);

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = `<i class="fa-solid ${THEMES[t].icon}"></i>`;
    btn.setAttribute('aria-label', THEMES[t].label);
    btn.title = THEMES[t].label;
  }
  applyChartTheme();
}

export function initTheme() {
  applyTheme(getTheme());
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const next = THEMES[getTheme()].next;
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode: theme just won't be remembered
    }
  });
}
