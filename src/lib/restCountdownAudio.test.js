import { describe, it, expect } from 'vitest';
import {
  encodeRestCountdownWav,
  restCountdownMediaSeconds,
} from './restCountdownAudio.js';

describe('restCountdownMediaSeconds', () => {
  it('includes rest plus three spaced beeps', () => {
    expect(restCountdownMediaSeconds(90)).toBeCloseTo(90 + 0.6 + 0.17, 5);
    expect(restCountdownMediaSeconds(0)).toBeCloseTo(0.77, 5);
  });
});

describe('encodeRestCountdownWav', () => {
  it('produces a WAV with energy in the beep region', async () => {
    const blob = encodeRestCountdownWav(1, 1000);
    expect(blob.type).toBe('audio/wav');
    const buf = new Uint8Array(await blob.arrayBuffer());
    expect(buf[0]).toBe(0x52); // RIFF
    const dataOffset = 44;
    const sampleCount = Math.ceil(restCountdownMediaSeconds(1) * 1000);
    let maxRest = 0;
    let maxBeep = 0;
    for (let i = 0; i < sampleCount; i += 1) {
      const lo = buf[dataOffset + i * 2];
      const hi = buf[dataOffset + i * 2 + 1];
      const sample = (hi << 8) | lo;
      const signed = sample > 0x7fff ? sample - 0x10000 : sample;
      const abs = Math.abs(signed);
      if (i < 1000) maxRest = Math.max(maxRest, abs);
      else maxBeep = Math.max(maxBeep, abs);
    }
    expect(maxRest).toBeLessThan(100);
    expect(maxBeep).toBeGreaterThan(500);
  });
});
