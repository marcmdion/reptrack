import { describe, it, expect } from 'vitest';
import { escapeHtml, getLocalDateId, groupProgramSets, workoutMatchesDateId } from './utils.js';

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

describe('groupProgramSets', () => {
  it('merges program sets per exercise and day, leaves other logs alone', () => {
    const ts = (d) => ({ toDate: () => new Date(2026, 9, d, 12) });
    const set = (exercise, setIndex, d = 12) => ({ type: 'workout', program: 'p', exercise, setIndex, timestamp: ts(d) });
    const manual = { type: 'workout', exercise: 'Running', timestamp: ts(12) };
    const out = groupProgramSets([set('Bench', 1), manual, set('Bench', 0), set('Row', 0), set('Bench', 0, 5)]);
    expect(out.map((i) => i.type)).toEqual(['set-group', 'workout', 'set-group', 'set-group']);
    expect(out[0].sets.map((s) => s.setIndex)).toEqual([0, 1]);
    expect(out[3].key).toBe('2026-10-05|Bench');
  });
});
