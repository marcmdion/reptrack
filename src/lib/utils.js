export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function getLocalDateId(dateObj = new Date()) {
  return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
}

export function workoutMatchesDateId(workout, dateId) {
  if (!workout?.timestamp || !dateId) return false;
  return getLocalDateId(workout.timestamp.toDate()) === dateId;
}

// Merge program sets (one doc per set) into one entry per exercise per day, kept at the first set's position
export function groupProgramSets(items) {
  const out = [];
  const groups = {};
  items.forEach((item) => {
    if (item.type !== 'workout' || !item.program || item.setIndex == null || !item.timestamp) {
      out.push(item);
      return;
    }
    const key = `${getLocalDateId(item.timestamp.toDate())}|${item.exercise}`;
    if (!groups[key]) {
      groups[key] = { type: 'set-group', key, exercise: item.exercise, sets: [] };
      out.push(groups[key]);
    }
    groups[key].sets.push(item);
  });
  Object.values(groups).forEach((g) => g.sets.sort((a, b) => a.setIndex - b.setIndex));
  return out;
}

export function setButtonLoading(button, isLoading, loadingText = 'Saving...') {
  if (!button) return;
  if (isLoading) {
    if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML;
    button.disabled = true;
    button.innerHTML = `<span class="inline-block w-4 h-4 border-2 border-bg/20 border-t-bg rounded-full animate-spin mr-2 align-middle"></span>${loadingText}`;
  } else {
    button.disabled = false;
    if (button.dataset.originalHtml) {
      button.innerHTML = button.dataset.originalHtml;
      delete button.dataset.originalHtml;
    }
  }
}

export function showToast(msg, isError = false) {
  const div = document.createElement('div');
  div.className = `fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-fade-in ${isError ? 'bg-red-500 text-white' : 'bg-accent text-on-accent'}`;
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => {
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.3s ease';
    setTimeout(() => div.remove(), 300);
  }, 3000);
}

// Legacy inline handlers referenced window.showToast
if (typeof window !== 'undefined') {
  window.showToast = showToast;
}
