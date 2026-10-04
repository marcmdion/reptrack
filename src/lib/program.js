// Upper/Lower + Cardio program. Pure data + logic (no DOM, no Firebase) so it can be unit tested.

export const PROGRAM_ID = 'ul-cardio-v1';
export const TARGET_REPS = 10;
export const BASE_SETS = 3;
export const EXTRA_SET_AFTER_WEEK = 8;
export const MIN_REPS_SHOWN = 5;
// "Add reps first" lifts climb from TARGET_REPS to TOP_REPS before adding weight
export const TOP_REPS = 12;

// step = smallest weight jump available (used for rounding a deload)
const EQUIP = {
  barbell: { inc: 2.5, step: 2.5 },
  machine: { inc: 2.5, step: 2.5 },
  dumbbell: { inc: 2, step: 2 },
  heavy: { inc: 5, step: 2.5 },
  bw: { inc: 0, step: 0 },
};

const lift = (name, start, equip, extra = {}) => ({ name, start, equip, ...extra });
const cardio = (name, minutes) => ({ name, minutes, cardio: true });

export const INCLINE_WALK = 'Incline Walk';
export const INTERVALS = 'Intervals (Bike/Rower)';
export const programCardioExercises = [INCLINE_WALK, INTERVALS];

export const programDays = {
  upperA: {
    label: 'Upper A',
    items: [
      lift('Bench Press', 35, 'barbell'),
      lift('Chest-Supported Row', 35, 'machine'),
      lift('Overhead Press', 17.5, 'barbell'),
      lift('Lat Pulldown', 35, 'machine'),
      lift('Dumbbell Curl', 10, 'dumbbell', { each: true, repsFirst: true, superset: 'Tricep Pushdown' }),
      lift('Tricep Pushdown', 15, 'machine', { repsFirst: true, superset: 'Dumbbell Curl' }),
      cardio(INCLINE_WALK, 30),
    ],
  },
  lowerA: {
    label: 'Lower A',
    items: [
      lift('Hack Squat', 50, 'heavy'),
      lift('Dumbbell Romanian Deadlift', 16, 'dumbbell', { each: true, repsFirst: true }),
      lift('Leg Curl', 25, 'machine'),
      lift('Walking Lunge', 'BW', 'bw', { note: '10 each leg' }),
      lift('Standing Calf Raise', 40, 'machine'),
      cardio(INCLINE_WALK, 30),
    ],
  },
  upperB: {
    label: 'Upper B',
    items: [
      lift('Incline Dumbbell Press', 14, 'dumbbell', { each: true, repsFirst: true }),
      lift('Seated Cable Row', 30, 'machine'),
      lift('Seated Dumbbell Shoulder Press', 12, 'dumbbell', { each: true, repsFirst: true }),
      lift('Close-Grip Lat Pulldown', 35, 'machine'),
      lift('Lateral Raise', 6, 'dumbbell', { each: true, repsFirst: true, superset: 'Face Pull' }),
      lift('Face Pull', 14, 'machine', { repsFirst: true, superset: 'Lateral Raise' }),
      cardio(INCLINE_WALK, 30),
    ],
  },
  lowerB: {
    label: 'Lower B',
    items: [
      lift('Barbell Hip Thrust', 50, 'barbell'),
      lift('Leg Press', 60, 'heavy'),
      lift('Leg Extension', 30, 'machine'),
      lift('Leg Curl', 25, 'machine'),
      lift('Standing Calf Raise', 40, 'machine'),
      cardio(INCLINE_WALK, 30),
    ],
  },
  cardio: { label: 'Cardio', items: [] }, // depends on week, see getDayPlan
  rest: { label: 'Rest', items: [] },
};

// Index = Date.getDay() (0 = Sunday)
export const weekSchedule = ['rest', 'upperA', 'lowerA', 'cardio', 'upperB', 'lowerB', 'cardio'];

function parseDateId(dateId) {
  const [y, m, d] = dateId.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function toDateId(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function dayKeyForDate(dateId) {
  return weekSchedule[parseDateId(dateId).getDay()];
}

// First program day: today if Monday, next Monday if Sunday, otherwise this week's Monday.
export function defaultStartDateId(todayId) {
  const d = parseDateId(todayId);
  const dow = d.getDay();
  d.setDate(d.getDate() + (dow === 0 ? 1 : 1 - dow));
  return toDateId(d);
}

export function weekNumber(startDateId, dateId) {
  const days = Math.round((parseDateId(dateId) - parseDateId(startDateId)) / 86400000);
  return Math.max(1, Math.floor(days / 7) + 1);
}

export function getDayPlan(dayKey, week) {
  const day = programDays[dayKey];
  if (dayKey === 'cardio') {
    const items =
      week >= 4 ? [cardio(INTERVALS, 20), cardio(INCLINE_WALK, 25)] : [cardio(INCLINE_WALK, 45)];
    return { key: dayKey, label: day.label, items, note: week >= 4 ? 'Intervals: 1 min hard, 2 min easy' : '' };
  }
  let liftIndex = 0;
  const items = day.items.map((item, i) => {
    if (item.cardio) return item;
    liftIndex++;
    const sets = week > EXTRA_SET_AFTER_WEEK && liftIndex <= 2 ? BASE_SETS + 1 : BASE_SETS;
    // First exercise of a superset pair: go straight to the partner, no rest
    const supersetFirst = !!item.superset && day.items.findIndex((x) => x.name === item.superset) > i;
    return { ...item, sets, supersetFirst };
  });
  return { key: dayKey, label: day.label, items, note: '' };
}

// Round down to the nearest available weight so a deload always goes lower.
function roundDownTo(value, step) {
  if (!step) return value;
  return Math.floor(value / step + 1e-9) * step;
}

// Program sets for one exercise grouped by day, newest first. Only days before `beforeDateId`.
export function pastSessions(workouts, exercise, beforeDateId, dateIdOf) {
  const byDay = {};
  workouts.forEach((w) => {
    if (w.program !== PROGRAM_ID || w.exercise !== exercise) return;
    const dateId = dateIdOf(w);
    if (!dateId || dateId >= beforeDateId) return;
    if (!byDay[dateId]) {
      byDay[dateId] = {
        dateId,
        weight: w.weight,
        reps: [],
        targetSets: w.targetSets || BASE_SETS,
        targetReps: w.targetReps || TARGET_REPS,
      };
    }
    byDay[dateId].reps.push(Number(w.reps) || 0);
  });
  return Object.values(byDay).sort((a, b) => (a.dateId < b.dateId ? 1 : -1));
}

export function sessionSucceeded(session) {
  const target = session.targetReps || TARGET_REPS;
  return session.reps.length >= session.targetSets && session.reps.every((r) => r >= target);
}

// Returns { weight, reps, reason } where reason is one of: start, up, reps, same, deload, bw
export function nextTarget(item, sessions) {
  if (item.equip === 'bw') return { weight: 'BW', reps: TARGET_REPS, reason: 'bw' };
  if (sessions.length === 0) return { weight: item.start, reps: TARGET_REPS, reason: 'start' };

  const last = sessions[0];
  const lastWeight = Number(last.weight);
  const lastReps = item.repsFirst ? last.targetReps || TARGET_REPS : TARGET_REPS;
  const { inc, step } = EQUIP[item.equip];

  if (sessionSucceeded(last)) {
    if (item.repsFirst && lastReps < TOP_REPS) return { weight: lastWeight, reps: lastReps + 1, reason: 'reps' };
    return { weight: lastWeight + inc, reps: TARGET_REPS, reason: 'up' };
  }

  const lastThree = sessions.slice(0, 3);
  const stuck =
    lastThree.length === 3 &&
    lastThree.every(
      (s) => Number(s.weight) === lastWeight && (s.targetReps || TARGET_REPS) === last.targetReps && !sessionSucceeded(s),
    );
  if (stuck) return { weight: roundDownTo(lastWeight * 0.9, step), reps: TARGET_REPS, reason: 'deload' };

  return { weight: lastWeight, reps: lastReps, reason: 'same' };
}

export function weightStep(item) {
  return EQUIP[item.equip]?.step || 0;
}

// Tapping a set circle: empty -> target -> target-1 -> ... -> 5 -> empty
export function nextRepState(current, target = TARGET_REPS) {
  if (current == null) return target;
  if (current <= MIN_REPS_SHOWN) return null;
  return Math.min(current, target) - 1;
}
