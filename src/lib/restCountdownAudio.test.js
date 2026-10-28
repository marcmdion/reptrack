import { describe, it, expect } from 'vitest';
import {
  encodeRestEndBeepsWav,
  restEndBeepMediaSeconds,
} from './restCountdownAudio.js';

describe('restEndBeepMediaSeconds', () => {
  it('covers three spaced beeps only', () => {
    expect(restEndBeepMediaSeconds()).toBeCloseTo(0.6 + 0.17, 5);
  });
});

describe('encodeRestEndBeepsWav', () => {
  it('produces a short WAV with energy in the beep region', async () => {
    const blob = encodeRestEndBeepsWav(1000);
    expect(blob.type).toBe('audio/wav');
    const buf = new Uint8Array(await blob.arrayBuffer());
    expect(buf[0]).toBe(0x52); // RIFF
    const dataOffset = 44;
    const sampleCount = Math.ceil(restEndBeepMediaSeconds() * 1000);
    let max = 0;
    for (let i = 0; i < sampleCount; i += 1) {
      const lo = buf[dataOffset + i * 2];
      const hi = buf[dataOffset + i * 2 + 1];
      const sample = (hi << 8) | lo;
      const signed = sample > 0x7fff ? sample - 0x10000 : sample;
      max = Math.max(max, Math.abs(signed));
    }
    expect(max).toBeGreaterThan(500);
  });
});
