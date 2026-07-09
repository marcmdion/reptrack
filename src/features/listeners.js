import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { getLocalDateId, showToast } from '../lib/utils.js';
import { updateChartData } from './chart.js';
import { renderHistory, renderToday } from './history.js';
import { saveSessionName, syncSessionNameInput, getSelectedLogDateId } from './sessions.js';

export function setupRealtimeListeners() {
  if (!state.currentUser) return;
  state.unsubscribes.forEach((unsub) => unsub());
  state.unsubscribes = [];

  state.unsubscribes.push(
    onSnapshot(
      query(collection(db, 'users', state.currentUser.uid, 'workouts'), orderBy('timestamp', 'desc'), limit(100)),
      (snapshot) => {
        state.workoutsCache = snapshot.docs.map((d) => ({ id: d.id, type: 'workout', ...d.data() }));
        refreshHistoryView();
        renderToday(state.workoutsCache);
        updateChartData(state.workoutsCache);
        if (document.getElementById('input-exercise').value)
          document.getElementById('input-exercise').dispatchEvent(new Event('change'));
      },
    ),
  );

  state.unsubscribes.push(
    onSnapshot(
      query(collection(db, 'users', state.currentUser.uid, 'bodyweight'), orderBy('timestamp', 'desc'), limit(20)),
      (snapshot) => {
        state.bodyweightCache = snapshot.docs.map((d) => ({ id: d.id, type: 'bodyweight', ...d.data() }));
        refreshHistoryView();
      },
    ),
  );

  state.unsubscribes.push(
    onSnapshot(collection(db, 'users', state.currentUser.uid, 'sessions'), (snapshot) => {
      state.sessionsCache = {};
      snapshot.forEach((d) => {
        state.sessionsCache[d.id] = d.data().name;
      });
      syncSessionNameInput();
      refreshHistoryView();
    }),
  );
}

export function refreshHistoryView() {
  const combined = [...state.workoutsCache, ...state.bodyweightCache].sort(
    (a, b) => (b.timestamp?.toDate() || new Date()) - (a.timestamp?.toDate() || new Date()),
  );
  renderHistory(combined);
}

export async function deleteLog(id, collectionName) {
  try {
    await deleteDoc(doc(db, 'users', state.currentUser.uid, collectionName, id));
    showToast('Deleted');
  } catch {
    showToast('Error', true);
  }
}

export function initSessionNameListener() {
  const input = document.getElementById('today-session-name');
  const dateInput = document.getElementById('input-date');

  const persist = async () => {
    if (!state.currentUser) return;
    try {
      await saveSessionName(getSelectedLogDateId(), input.value);
    } catch {
      showToast('Error saving session name', true);
    }
  };

  input.addEventListener('change', persist);
  input.addEventListener('blur', persist);
  dateInput?.addEventListener('change', syncSessionNameInput);
}
