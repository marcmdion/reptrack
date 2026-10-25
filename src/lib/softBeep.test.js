import { describe, it, expect } from 'vitest';
import { armSoftBeep, beepDelaySeconds, confirmSoftBeep, disarmSoftBeep } from './softBeep.js';

describe('beepDelaySeconds', () => {
  it('maps wall-clock end to non-negative seconds', () => {
    const now = 1_000_000;
    expect(beepDelaySeconds(now + 30_000, now)).toBe(30);
    expect(beepDelaySeconds(now, now)).toBe(0);
    expect(beepDelaySeconds(now - 5_000, now)).toBe(0);
  });
});

describe('softBeep', () => {
  it('does not throw when Web Audio is unavailable', () => {
    expect(() => {
      armSoftBeep(Date.now() + 30_000);
      disarmSoftBeep();
      confirmSoftBeep();
    }).not.toThrow();
  });
});
