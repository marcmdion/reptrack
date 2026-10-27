import { describe, it, expect } from 'vitest';
import {
  armSoftBeep,
  beepDelaySeconds,
  confirmSoftBeep,
  disarmSoftBeep,
  softBeepOffsets,
  SOFT_BEEP_COUNT,
} from './softBeep.js';

describe('softBeepOffsets', () => {
  it('schedules three evenly spaced beeps', () => {
    expect(SOFT_BEEP_COUNT).toBe(3);
    expect(softBeepOffsets()).toEqual([0, 0.3, 0.6]);
  });
});

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

  it('confirmSoftBeep is idempotent for one rest cycle', () => {
    expect(() => {
      armSoftBeep(Date.now() + 30_000);
      confirmSoftBeep();
      confirmSoftBeep();
    }).not.toThrow();
  });
});
