import { describe, it, expect } from 'vitest';
import {
  EXERCISE_ALIASES,
  normalizeExerciseName,
  exerciseNamesEqual,
  workoutsForExercise,
  uniqueCanonicalExerciseNames,
  summarizeCanonicalMigration,
  normalizeExerciseList,
  programLiftNames,
} from './exerciseNames.js';

describe('normalizeExerciseName', () => {
  it('maps known manual defaults to program canonical names', () => {
    expect(normalizeExerciseName('Lateral Raises')).toBe('Lateral Raise');
    expect(normalizeExerciseName('leg extensions')).toBe('Leg Extension');
    expect(normalizeExerciseName(' Tricep Pushdowns ')).toBe('Tricep Pushdown');
    expect(normalizeExerciseName('Standing Calf Raises')).toBe('Standing Calf Raise');
  });

  it('leaves program and custom names unchanged', () => {
    expect(normalizeExerciseName('Bench Press')).toBe('Bench Press');
    expect(normalizeExerciseName('My Custom Lift')).toBe('My Custom Lift');
  });
});

describe('exerciseNamesEqual', () => {
  it('treats alias pairs as the same exercise', () => {
    expect(exerciseNamesEqual('Lateral Raise', 'Lateral Raises')).toBe(true);
    expect(exerciseNamesEqual('Leg Extension', 'Leg Extensions')).toBe(true);
  });
});

describe('workoutsForExercise', () => {
  it('includes logs under legacy names when filtering by canonical name', () => {
    const workouts = [
      { exercise: 'Lateral Raise', weight: 6 },
      { exercise: 'Lateral Raises', weight: 8 },
      { exercise: 'Bench Press', weight: 40 },
    ];
    expect(workoutsForExercise(workouts, 'Lateral Raise')).toHaveLength(2);
  });
});

describe('uniqueCanonicalExerciseNames', () => {
  it('merges alias variants in chart/history grouping', () => {
    const names = uniqueCanonicalExerciseNames([
      { exercise: 'Tricep Pushdown' },
      { exercise: 'Tricep Pushdowns' },
    ]);
    expect(names).toEqual(['Tricep Pushdown']);
  });
});

describe('summarizeCanonicalMigration', () => {
  it('counts workouts and list entries that need renaming', () => {
    const summary = summarizeCanonicalMigration(
      [{ exercise: 'Lateral Raises' }, { exercise: 'Bench Press' }],
      ['Lateral Raises', 'Lateral Raise'],
    );
    expect(summary.workoutUpdates).toBe(1);
    expect(summary.listUpdates).toBe(1);
    expect(summary.needsUpdate).toBe(true);
  });

  it('is idempotent when data is already canonical', () => {
    const summary = summarizeCanonicalMigration([{ exercise: 'Lateral Raise' }], ['Lateral Raise']);
    expect(summary.needsUpdate).toBe(false);
  });
});

describe('normalizeExerciseList', () => {
  it('dedupes alias variants to one canonical entry', () => {
    expect(normalizeExerciseList(['Lateral Raises', 'Lateral Raise', 'Bench Press'])).toEqual([
      'Lateral Raise',
      'Bench Press',
    ]);
  });
});

describe('programLiftNames', () => {
  it('includes canonical plan lifts referenced by aliases', () => {
    const lifts = programLiftNames();
    for (const canonical of Object.values(EXERCISE_ALIASES)) {
      expect(lifts).toContain(canonical);
    }
  });
});
