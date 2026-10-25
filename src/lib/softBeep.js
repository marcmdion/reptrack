/** One short sine beep via Web Audio (mixes with other apps; no exclusive audio focus). */
let ctx = null;
let cancelScheduled = null;
let scheduledFired = false;

function getCtx() {
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  return ctx;
}

/** Seconds from now until wall-clock end (for scheduling in AudioContext time). */
export function beepDelaySeconds(endsAtMs, nowMs = Date.now()) {
  return Math.max(0, (endsAtMs - nowMs) / 1000);
}

function unlockAudioContext(c) {
  if (c.state === 'suspended') void c.resume();
  const buf = c.createBuffer(1, 1, c.sampleRate);
  const src = c.createBufferSource();
  src.buffer = buf;
  src.connect(c.destination);
  src.start(0);
  try {
    src.stop(0);
  } catch {
    // already stopped
  }
}

function playToneAt(c, startTime) {
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
  gain.gain.linearRampToValueAtTime(0, startTime + 0.16);
  osc.connect(gain);
  gain.connect(c.destination);
  osc.start(startTime);
  osc.stop(startTime + 0.17);
  return osc;
}

function playSoftBeepNow() {
  const c = getCtx();
  if (!c) return;
  unlockAudioContext(c);
  playToneAt(c, c.currentTime);
}

/** User gesture: unlock audio and schedule beep at wall-clock end (Safari/iOS). */
export function armSoftBeep(endsAtMs) {
  scheduledFired = false;
  cancelScheduled?.();
  cancelScheduled = null;

  const c = getCtx();
  if (!c) return;

  unlockAudioContext(c);

  const delay = beepDelaySeconds(endsAtMs);
  const startTime = c.currentTime + delay;
  const osc = playToneAt(c, startTime);
  let cancelled = false;

  cancelScheduled = () => {
    if (cancelled) return;
    cancelled = true;
    try {
      osc.stop(0);
    } catch {
      // already stopped
    }
  };

  osc.onended = () => {
    if (!cancelled) scheduledFired = true;
  };
}

export function disarmSoftBeep() {
  cancelScheduled?.();
  cancelScheduled = null;
  scheduledFired = false;
}

/** Wall-clock timer finished: beep if the scheduled tone did not fire (e.g. suspended context). */
export function confirmSoftBeep() {
  if (!scheduledFired) playSoftBeepNow();
  disarmSoftBeep();
}
