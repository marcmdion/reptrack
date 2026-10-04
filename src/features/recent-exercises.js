import { state } from '../lib/state.js';

const MAX_CHIPS = 6;

export function updateRecentExerciseChips() {
  const container = document.getElementById('recent-exercise-chips');
  if (!container) return;

  const seen = new Set();
  const recent = [];
  for (const workout of state.workoutsCache) {
    const name = workout.exercise;
    if (!name || seen.has(name)) continue;
    seen.add(name);
    recent.push(name);
    if (recent.length >= MAX_CHIPS) break;
  }

  if (recent.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '';
  const label = document.createElement('span');
  label.className = 'text-[9px] text-faint uppercase tracking-widest mr-1';
  label.textContent = 'Recent';
  container.appendChild(label);

  recent.forEach((name) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className =
      'text-[10px] font-semibold px-3 py-1 rounded-full bg-input text-fg3 hover:text-fg hover:bg-line border border-raised transition';
    chip.textContent = name;
    chip.addEventListener('click', () => {
      const dropdown = document.getElementById('input-exercise');
      if (!dropdown) return;
      if ([...dropdown.options].some((o) => o.value === name)) {
        dropdown.value = name;
        dropdown.dispatchEvent(new Event('change'));
      }
    });
    container.appendChild(chip);
  });
}
