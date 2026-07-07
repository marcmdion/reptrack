import './styles/main.css';

import { initAuth } from './features/auth.js';
import { initExercises, fetchUserExercises } from './features/exercises.js';
import { initLogging } from './features/logging.js';
import { initBodyweight, fetchBodyWeightStatus } from './features/bodyweight.js';
import { setupRealtimeListeners, initSessionNameListener } from './features/listeners.js';
import { initNavigation } from './features/navigation.js';

initAuth(() => {
  setupRealtimeListeners();
  fetchUserExercises();
  fetchBodyWeightStatus();
});

initExercises();
initLogging();
initBodyweight();
initNavigation();
initSessionNameListener();
