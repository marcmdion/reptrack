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

export function showToast(msg, isError = false) {
  const div = document.createElement('div');
  div.className = `fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-[100] animate-fade-in ${isError ? 'bg-red-500 text-white' : 'bg-[#00E676] text-black'}`;
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
