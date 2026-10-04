export function confirmDialog({ title = 'Confirm', message, confirmLabel = 'Confirm', danger = true } = {}) {
  const modal = document.getElementById('confirm-modal');
  const titleEl = document.getElementById('confirm-modal-title');
  const messageEl = document.getElementById('confirm-modal-message');
  const confirmBtn = document.getElementById('confirm-modal-confirm');
  const cancelBtn = document.getElementById('confirm-modal-cancel');

  if (!modal || !titleEl || !messageEl || !confirmBtn || !cancelBtn) {
    return Promise.resolve(window.confirm(message || title));
  }

  titleEl.textContent = title;
  messageEl.textContent = message || '';
  confirmBtn.textContent = confirmLabel;
  confirmBtn.className = danger
    ? 'flex-1 p-3 rounded-xl text-sm font-bold bg-red-500/90 text-white hover:bg-red-500 transition'
    : 'flex-1 p-3 rounded-xl text-sm font-bold bg-accent text-on-accent hover:opacity-90 transition';

  modal.classList.remove('hidden');

  return new Promise((resolve) => {
    const cleanup = (result) => {
      modal.classList.add('hidden');
      confirmBtn.removeEventListener('click', onConfirm);
      cancelBtn.removeEventListener('click', onCancel);
      modal.removeEventListener('click', onBackdrop);
      resolve(result);
    };

    const onConfirm = () => cleanup(true);
    const onCancel = () => cleanup(false);
    const onBackdrop = (e) => {
      if (e.target === modal) cleanup(false);
    };

    confirmBtn.addEventListener('click', onConfirm);
    cancelBtn.addEventListener('click', onCancel);
    modal.addEventListener('click', onBackdrop);
  });
}
