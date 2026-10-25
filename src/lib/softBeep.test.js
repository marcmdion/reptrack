import { describe, it, expect } from 'vitest';
import { playSoftBeep, primeSoftBeep } from './softBeep.js';

describe('softBeep', () => {
  it('does not throw when Web Audio is unavailable', () => {
    expect(() => {
      primeSoftBeep();
      playSoftBeep();
    }).not.toThrow();
  });
});
