import './styles/main.css';

import { registerSW } from 'virtual:pwa-register';
import { initAuth } from './features/auth.js';
import { initExercises, fetchUserExercises } from './features/exercises.js';
import { initLogging } from './features/logging.js';
import { initBodyweight, fetchBodyWeightStatus } from './features/bodyweight.js';
import { setupRealtimeListeners, initSessionNameListener } from './features/listeners.js';
import { initNavigation } from './features/navigation.js';
import { initCollapsibleSections } from './features/collapsible.js';
import { initPlan, loadProgramSettings } from './features/plan.js';
import { initTheme } from './features/theme.js';
import { initMobility } from './features/mobility.js';

initAuth(() => {
  setupRealtimeListeners();
  fetchUserExercises();
  fetchBodyWeightStatus();
  loadProgramSettings();
});

initExercises();
initLogging();
initBodyweight();
initNavigation();
initSessionNameListener();
initCollapsibleSections();
initPlan();
initTheme();
initMobility();

registerSW({ immediate: true });
