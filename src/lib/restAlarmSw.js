const MSG = 'REST_ALARM';

export async function syncRestAlarmToServiceWorker(endsAtMs) {
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  try {
    const reg = await navigator.serviceWorker?.ready;
    reg?.active?.postMessage({ type: MSG, endsAt: endsAtMs, cancel: false });
  } catch {
    // SW unavailable
  }
}

export async function cancelRestAlarmInServiceWorker() {
  try {
    const reg = await navigator.serviceWorker?.ready;
    reg?.active?.postMessage({ type: MSG, cancel: true });
  } catch {
    // SW unavailable
  }
}

export function canPromptRestNotifications() {
  return typeof Notification !== 'undefined' && Notification.permission === 'default';
}

export function restNotificationsEnabled() {
  return typeof Notification !== 'undefined' && Notification.permission === 'granted';
}

export async function requestRestNotificationPermission() {
  if (typeof Notification === 'undefined') return 'unsupported';
  if (Notification.permission !== 'default') return Notification.permission;
  try {
    return await Notification.requestPermission();
  } catch {
    return 'denied';
  }
}
