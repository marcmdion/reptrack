import { programDays } from './program.js';

/**
 * Canonical exercise names come from Today's Plan (program.js lift names).
 * Manual-log defaults and legacy Firestore values may use plural or other variants;
 * EXERCISE_ALIASES maps those to the program spelling.
 */
export const EXERCISE_ALIASES = {
  'lateral raises': 'Lateral Raise',
  'leg extensions': 'Leg Extension',
  'tricep pushdowns': 'Tricep Pushdown',
  'standing calf raises': 'Standing Calf Raise',
};

const aliasByLower = { ...EXERCISE_ALIASES };

/** All lift names defined in the active program (excluding cardio items). */
export function programLiftNames() {
  const names = new Set();
  for (const day of Object.values(programDays)) {
    for (const item of day.items || []) {
      if (!item.cardio && item.name) names.add(item.name);
    }
  }
  return [...names].sort();
}

export function normalizeExerciseName(name) {
  if (name == null || name === '') return name ?? '';
  const trimmed = String(name).trim();
  return aliasByLower[trimmed.toLowerCase()] ?? trimmed;
}

export function exerciseNameKey(name) {
  return normalizeExerciseName(name).toLowerCase();
}

export function exerciseNamesEqual(a, b) {
  return exerciseNameKey(a) === exerciseNameKey(b);
}

export function workoutsForExercise(workouts, exercise) {
  const key = exerciseNameKey(exercise);
  return workouts.filter((w) => w.exercise && exerciseNameKey(w.exercise) === key);
}

export function uniqueCanonicalExerciseNames(workouts) {
  const byKey = new Map();
  for (const w of workouts) {
    if (!w.exercise) continue;
    const canon = normalizeExerciseName(w.exercise);
    const key = exerciseNameKey(canon);
    if (!byKey.has(key)) byKey.set(key, canon);
  }
  return [...byKey.values()].sort();
}

/** Preview counts for the in-app backfill (idempotent: only non-canonical stored names). */
export function summarizeCanonicalMigration(workouts, exerciseList = []) {
  const workoutRenames = {};
  let workoutUpdates = 0;
  for (const w of workouts) {
    if (!w.exercise) continue;
    const to = normalizeExerciseName(w.exercise);
    if (to === w.exercise) continue;
    workoutUpdates += 1;
    const label = `${w.exercise} → ${to}`;
    workoutRenames[label] = (workoutRenames[label] || 0) + 1;
  }

  let listUpdates = 0;
  const listRenames = {};
  for (const ex of exerciseList) {
    const to = normalizeExerciseName(ex);
    if (to === ex) continue;
    listUpdates += 1;
    const label = `${ex} → ${to}`;
    listRenames[label] = (listRenames[label] || 0) + 1;
  }

  return {
    workoutUpdates,
    listUpdates,
    workoutRenames,
    listRenames,
    needsUpdate: workoutUpdates > 0 || listUpdates > 0,
  };
}

export function normalizeExerciseList(list) {
  const out = [];
  const seen = new Set();
  for (const raw of list) {
    const canon = normalizeExerciseName(raw);
    const key = exerciseNameKey(canon);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(canon);
  }
  return out;
}
