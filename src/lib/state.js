import { orderedDefaults } from './constants.js';

export const state = {
  currentUser: null,
  unsubscribes: [],
  chartInstance: null,
  chartModule: null,
  availableExercises: [...orderedDefaults],
  workoutsCache: [],
  bodyweightCache: [],
  sessionsCache: {},
  todayBWDocId: null,
  allWorkoutsCache: [],
};
