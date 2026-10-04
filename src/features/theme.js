import { applyChartTheme } from './chart.js';

const STORAGE_KEY = 'reptrack-theme';
// meta = browser bar color; swatch = [background, accent] shown in the menu
const THEMES = {
  dark: { label: 'Dark', meta: '#000000', swatch: ['#0a0a0a', '#00E676'] },
  stone: { label: 'Stone', meta: '#E9E6DF', swatch: ['#F4F2ED', '#3D6B4A'] },
  japandi: { label: 'Japandi', meta: '#EFE9E1', swatch: ['#F8F4EE', '#9A5B3F'] },
};

export function getTheme() {
  const t = document.documentElement.dataset.theme;
  return THEMES[t] ? t : 'dark';
}

function applyTheme(theme) {
  const t = THEMES[theme] ? theme : 'dark';
  if (t === 'dark') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEMES[t].meta);
  applyChartTheme();
  renderMenu();
}

function renderMenu() {
  const menu = document.getElementById('theme-menu');
  if (!menu) return;
  const current = getTheme();
  menu.innerHTML = '';
  Object.entries(THEMES).forEach(([key, t]) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.setAttribute('role', 'menuitemradio');
    item.setAttribute('aria-checked', String(key === current));
    item.dataset.theme = key;
    item.className = `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition ${
      key === current ? 'bg-input text-fg font-semibold' : 'text-fg2 hover:bg-input'
    }`;
    const swatch = document.createElement('span');
    swatch.className = 'w-5 h-5 rounded-full border border-ring/50 shrink-0 flex items-center justify-center';
    swatch.style.background = t.swatch[0];
    const dot = document.createElement('span');
    dot.className = 'w-2 h-2 rounded-full';
    dot.style.background = t.swatch[1];
    swatch.append(dot);
    const name = document.createElement('span');
    name.className = 'flex-1';
    name.textContent = t.label;
    item.append(swatch, name);
    if (key === current) {
      const check = document.createElement('i');
      check.className = 'fa-solid fa-check text-accent text-xs';
      item.append(check);
    }
    item.addEventListener('click', () => {
      applyTheme(key);
      setMenuOpen(false);
      try {
        localStorage.setItem(STORAGE_KEY, key);
      } catch {
        // Private mode: theme just won't be remembered
      }
    });
    menu.append(item);
  });
}

function setMenuOpen(open) {
  document.getElementById('theme-menu')?.classList.toggle('hidden', !open);
  document.getElementById('theme-toggle')?.setAttribute('aria-expanded', String(open));
}

export function initTheme() {
  applyTheme(getTheme());
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    setMenuOpen(document.getElementById('theme-menu').classList.contains('hidden'));
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#theme-menu')) setMenuOpen(false);
  });
}
