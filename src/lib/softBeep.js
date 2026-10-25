/** One short sine beep via Web Audio (mixes with other apps; no exclusive audio focus). */
let ctx = null;

function getCtx() {
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  return ctx;
}

/** Call from a user gesture (e.g. rest timer start) so completion can play later. */
export function primeSoftBeep() {
  try {
    const c = getCtx();
    if (c?.state === 'suspended') void c.resume();
  } catch {
    // Audio unavailable or blocked
  }
}

export function playSoftBeep() {
  try {
    const c = getCtx();
    if (!c) return;
    void c.resume().then(() => {
      const t = c.currentTime;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.06, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t);
      osc.stop(t + 0.15);
    });
  } catch {
    // Audio unavailable or blocked
  }
}
