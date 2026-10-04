import { describe, it, expect } from 'vitest';
import {
  PROGRAM_ID,
  dayKeyForDate,
  defaultStartDateId,
  getDayPlan,
  nextRepState,
  nextTarget,
  pastSessions,
  weekNumber,
} from './program.js';

const bench = { name: 'Bench Press', start: 35, equip: 'barbell' };
const hack = { name: 'Hack Squat', start: 50, equip: 'heavy' };
const curl = { name: 'Dumbbell Curl', start: 10, equip: 'dumbbell' };
const session = (dateId, weight, reps) => ({ dateId, weight, reps, targetSets: 3 });

describe('schedule', () => {
  it('maps weekdays to program days', () => {
    expect(dayKeyForDate('2026-10-05')).toBe('upperA'); // Monday
    expect(dayKeyForDate('2026-10-07')).toBe('cardio');
    expect(dayKeyForDate('2026-10-09')).toBe('lowerB');
    expect(dayKeyForDate('2026-10-04')).toBe('rest'); // Sunday
  });

  it('picks a Monday start date', () => {
    expect(defaultStartDateId('2026-10-04')).toBe('2026-10-05'); // Sunday -> next Monday
    expect(defaultStartDateId('2026-10-05')).toBe('2026-10-05');
    expect(defaultStartDateId('2026-10-08')).toBe('2026-10-05');
  });

  it('counts weeks from start', () => {
    expect(weekNumber('2026-10-05', '2026-10-05')).toBe(1);
    expect(weekNumber('2026-10-05', '2026-10-11')).toBe(1);
    expect(weekNumber('2026-10-05', '2026-10-12')).toBe(2);
    expect(weekNumber('2026-10-05', '2026-10-01')).toBe(1);
  });
});

describe('getDayPlan', () => {
  it('switches cardio at week 4', () => {
    expect(getDayPlan('cardio', 3).items.map((i) => i.minutes)).toEqual([45]);
    expect(getDayPlan('cardio', 4).items.map((i) => i.minutes)).toEqual([20, 25]);
  });

  it('adds a 4th set to the first two lifts after week 8', () => {
    expect(getDayPlan('upperA', 8).items.map((i) => i.sets)).toEqual([3, 3, 3, 3, 3, 3, undefined]);
    expect(getDayPlan('upperA', 9).items.map((i) => i.sets)).toEqual([4, 4, 3, 3, 3, 3, undefined]);
  });
});

describe('nextTarget', () => {
  it('uses the start weight first time', () => {
    expect(nextTarget(bench, [])).toMatchObject({ weight: 35, reason: 'start' });
  });

  it('adds weight after 3x10', () => {
    expect(nextTarget(bench, [session('d1', 35, [10, 10, 10])])).toMatchObject({ weight: 37.5, reason: 'up' });
    expect(nextTarget(hack, [session('d1', 50, [10, 10, 10])]).weight).toBe(55);
    expect(nextTarget(curl, [session('d1', 10, [10, 10, 10])]).weight).toBe(12);
  });

  it('keeps weight after a missed set or a skipped set', () => {
    expect(nextTarget(bench, [session('d1', 35, [10, 10, 8])])).toMatchObject({ weight: 35, reason: 'same' });
    expect(nextTarget(bench, [session('d1', 35, [10, 10])]).weight).toBe(35);
  });

  it('deloads 10% after 3 stuck sessions', () => {
    const stuck = [session('d3', 40, [10, 9, 8]), session('d2', 40, [10, 10, 9]), session('d1', 40, [9, 9, 9])];
    expect(nextTarget(bench, stuck)).toMatchObject({ weight: 35, reason: 'deload' });
    const small = { name: 'Lateral Raise', start: 6, equip: 'dumbbell' };
    const stuckSmall = [session('d3', 6, [8]), session('d2', 6, [8]), session('d1', 6, [8])];
    expect(nextTarget(small, stuckSmall).weight).toBe(4);
  });

  it('does not deload if weight changed within the 3 sessions', () => {
    const mixed = [session('d3', 40, [8, 8, 8]), session('d2', 40, [8, 8, 8]), session('d1', 37.5, [9, 9, 9])];
    expect(nextTarget(bench, mixed).reason).toBe('same');
  });
});

describe('pastSessions', () => {
  it('groups program sets by day and ignores today and non-program logs', () => {
    const dateIdOf = (w) => w.d;
    const w = (d, reps, extra = {}) => ({ program: PROGRAM_ID, exercise: 'Bench Press', weight: 35, reps, d, ...extra });
    const workouts = [
      w('2026-10-12', 10),
      w('2026-10-05', 10),
      w('2026-10-05', 9),
      w('2026-10-01', 10, { program: undefined }),
    ];
    const sessions = pastSessions(workouts, 'Bench Press', '2026-10-12', dateIdOf);
    expect(sessions).toHaveLength(1);
    expect(sessions[0]).toMatchObject({ dateId: '2026-10-05', reps: [10, 9] });
  });
});

describe('nextRepState', () => {
  it('cycles empty -> 10 -> 9 ... -> 5 -> empty', () => {
    expect(nextRepState(null)).toBe(10);
    expect(nextRepState(10)).toBe(9);
    expect(nextRepState(6)).toBe(5);
    expect(nextRepState(5)).toBe(null);
  });
});
