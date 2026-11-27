/**
 * Rest-complete beeps that must not pause podcasts or disable Siri.
 *
 * On iOS, WebKit registers a running AudioContext (or an <audio> element) as
 * the Now Playing session. That session is exclusive: podcasts pause, and the
 * side button stops starting Siri ("Siri is disabled") until the session is
 * gone. Scheduling beeps for the whole rest, or playing a silent unlock
 * buffer, starts that session immediately — suspend() does not reliably drop
 * Now Playing. An <audio> element is playback-category and does the same.
 * iOS therefore never constructs a context, never resumes one, and never sets
 * audioSession (not playback, not play-and-record).
 *
 * Desktop beeps only when rest ends, on an ambient session, and the context
 * is suspended while the timer counts. Android browsers with no Audio Session
 * API take exclusive audio focus, so they get no timer sound either.
 */

let ctx = null;
let armed = false;
let generation = 0;
let wantRunning = false;
let stopBeeps = null;

export const SOFT_BEEP_COUNT = 3;
/** Seconds between the start of each beep in a rest-complete pattern. */
export const SOFT_BEEP_INTERVAL_S = 0.3;

export function softBeepOffsets(count = SOFT_BEEP_COUNT) {
  return Array.from({ length: count }, (_, i) => i * SOFT_BEEP_INTERVAL_S);
}

/** iOS takes the side button (Siri) and other apps' audio for any active page session. */
function iosExclusiveAudioSession() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  // iPadOS 13+ uses a desktop Mac UA and gives itself away with touch points.
  return navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1;
}

/**
 * False when a beep would pause other apps or disable Siri.
 * Pins ambient only when we are about to play. iOS never reaches this.
 * @returns {boolean}
 */
function mayPlayMixableBeep() {
  if (iosExclusiveAudioSession()) return false;
  if (typeof navigator === 'undefined') return true;
  const session = navigator.audioSession;
  if (session) {
    try {
      if (session.type !== 'ambient') session.type = 'ambient';
    } catch {
      return false;
    }
    return session.type === 'ambient';
  }
  // Android Chrome has no mixable session and takes audio focus on resume().
  return !/Android/i.test(navigator.userAgent || '');
}

function getCtx() {
  if (!mayPlayMixableBeep()) return null;
  const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
  if (!AC) return null;
  if (!ctx || ctx.state === 'closed') ctx = new AC();
  return ctx;
}

function suspendIfRunning(c) {
  if (c && c.state === 'running') void c.suspend();
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

function playSoftBeeps(c) {
  const oscillators = softBeepOffsets().map((offset) => playToneAt(c, c.currentTime + offset));
  let pending = oscillators.length;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    wantRunning = false;
    suspendIfRunning(c);
  };
  for (const osc of oscillators) {
    osc.onended = () => {
      pending -= 1;
      if (pending <= 0) finish();
    };
  }
  stopBeeps = () => {
    for (const osc of oscillators) {
      try {
        osc.stop(0);
      } catch {
        // already stopped
      }
    }
    finish();
  };
}

function afterResume(c, gen, fn) {
  const started = c.state === 'suspended' ? c.resume() : Promise.resolve();
  void Promise.resolve(started).then(() => {
    if (gen !== generation) {
      if (!wantRunning) suspendIfRunning(c);
      return;
    }
    fn();
  });
}

/** Timer tap. Unlock audio inside the gesture, then release the session. */
export function armSoftBeep() {
  armed = true;
  wantRunning = false;
  stopBeeps?.();
  stopBeeps = null;
  generation += 1;
  const gen = generation;
  const c = getCtx();
  if (!c) return;
  afterResume(c, gen, () => suspendIfRunning(c));
}

export function disarmSoftBeep() {
  if (!armed && !stopBeeps) return;
  armed = false;
  wantRunning = false;
  generation += 1;
  stopBeeps?.();
  stopBeeps = null;
  suspendIfRunning(ctx);
}

/** Rest finished. One short ambient beep pattern, or silence if that would pause other audio. */
export function confirmSoftBeep() {
  if (!armed) return;
  armed = false;
  generation += 1;
  const gen = generation;
  const c = getCtx();
  if (!c) return;
  wantRunning = true;
  afterResume(c, gen, () => {
    if (gen !== generation || c.state !== 'running') {
      wantRunning = false;
      return;
    }
    playSoftBeeps(c);
  });
}
