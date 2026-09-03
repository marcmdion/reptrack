import { describe, it, expect } from 'vitest';
import { escapeHtml, getLocalDateId, workoutMatchesDateId } from './utils.js';

describe('escapeHtml', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml('<script>"\'&')).toBe('&lt;script&gt;&quot;&#39;&amp;');
  });
});

describe('getLocalDateId', () => {
  it('formats date as YYYY-MM-DD', () => {
    const date = new Date(2026, 6, 9);
    expect(getLocalDateId(date)).toBe('2026-07-09');
  });
});

describe('workoutMatchesDateId', () => {
  it('matches workout timestamp to date id', () => {
    const workout = {
      timestamp: {
        toDate: () => new Date(2026, 6, 9, 15, 30),
      },
    };
    expect(workoutMatchesDateId(workout, '2026-07-09')).toBe(true);
    expect(workoutMatchesDateId(workout, '2026-07-08')).toBe(false);
  });
});
