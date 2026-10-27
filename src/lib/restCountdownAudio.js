import { SOFT_BEEP_COUNT, SOFT_BEEP_INTERVAL_S, softBeepOffsets } from './softBeep.js';

const BEEP_HZ = 880;
const BEEP_ATTACK_S = 0.02;
const BEEP_DURATION_S = 0.17;
const BEEP_PEAK = 0.12;
const DEFAULT_SAMPLE_RATE = 22050;

let audioEl = null;
let objectUrl = null;
let cancelled = false;
let beepsFinished = false;

/** Total media length: rest silence then three soft beeps. */
export function restCountdownMediaSeconds(restSeconds) {
  const offsets = softBeepOffsets(SOFT_BEEP_COUNT);
  const last = offsets[offsets.length - 1] ?? 0;
  return restSeconds + last + BEEP_DURATION_S;
}

function mixBeepInto(channel, sampleRate, startSecond) {
  const startIdx = Math.floor(startSecond * sampleRate);
  const sampleCount = Math.ceil(BEEP_DURATION_S * sampleRate);
  for (let i = 0; i < sampleCount; i += 1) {
    const idx = startIdx + i;
    if (idx < 0 || idx >= channel.length) break;
    const t = i / sampleRate;
    let gain = 0;
    if (t < BEEP_ATTACK_S) gain = (t / BEEP_ATTACK_S) * BEEP_PEAK;
    else gain = BEEP_PEAK * (1 - (t - BEEP_ATTACK_S) / (BEEP_DURATION_S - BEEP_ATTACK_S));
    channel[idx] += Math.sin(2 * Math.PI * BEEP_HZ * t) * gain;
  }
}

/** Build a WAV blob: silence for restSeconds, then the standard three beeps. */
export function encodeRestCountdownWav(restSeconds, sampleRate = DEFAULT_SAMPLE_RATE) {
  const totalSeconds = restCountdownMediaSeconds(restSeconds);
  const numSamples = Math.ceil(totalSeconds * sampleRate);
  const channel = new Float32Array(numSamples);
  const restSamples = Math.floor(restSeconds * sampleRate);
  // ponytail: iOS may suspend “digital zero” segments — sub-audible dither keeps media playback alive
  for (let i = 0; i < restSamples; i += 1) {
    channel[i] = (Math.random() * 2 - 1) * 0.00005;
  }
  const beepsAt = restSeconds;
  for (let i = 0; i < SOFT_BEEP_COUNT; i += 1) {
    mixBeepInto(channel, sampleRate, beepsAt + i * SOFT_BEEP_INTERVAL_S);
  }
  return float32ToWavBlob(channel, sampleRate);
}

function float32ToWavBlob(samples, sampleRate) {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i += 1) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, numSamples * 2, true);
  let offset = 44;
  for (let i = 0; i < numSamples; i += 1) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

function revokeObjectUrl() {
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }
}

export function restCountdownBeepsFinished() {
  return beepsFinished;
}

/** Start background-safe rest alert (HTML media timeline). Returns false if play() rejected. */
export async function armRestCountdown(restSeconds, { onBeepsFinished } = {}) {
  disarmRestCountdown();
  cancelled = false;
  beepsFinished = false;

  if (typeof Audio === 'undefined' || typeof Blob === 'undefined') return false;

  const blob = encodeRestCountdownWav(restSeconds);
  objectUrl = URL.createObjectURL(blob);
  audioEl = new Audio(objectUrl);
  audioEl.setAttribute('playsinline', '');
  audioEl.volume = 1;
  audioEl.onended = () => {
    if (cancelled) return;
    beepsFinished = true;
    onBeepsFinished?.();
    disarmRestCountdown();
  };

  try {
    await audioEl.play();
    return true;
  } catch {
    disarmRestCountdown();
    return false;
  }
}

export function disarmRestCountdown() {
  cancelled = true;
  if (audioEl) {
    audioEl.onended = null;
    audioEl.pause();
    audioEl.removeAttribute('src');
    audioEl.load();
    audioEl = null;
  }
  revokeObjectUrl();
}
