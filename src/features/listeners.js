import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  setDoc,
} from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { getLocalDateId, showToast } from '../lib/utils.js';
import { updateChartData } from './chart.js';
import { renderHistory, renderToday } from './history.js';

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
    onSnapshot(query(collection(db, 'users', state.currentUser.uid, 'sessions'), limit(30)), (snapshot) => {
      state.sessionsCache = {};
      snapshot.forEach((d) => {
        state.sessionsCache[d.id] = d.data().name;
      });
      const todayId = getLocalDateId();
      const input = document.getElementById('today-session-name');
      if (state.sessionsCache[todayId]) input.value = state.sessionsCache[todayId];
      else input.value = '';
      input.placeholder = todayId;
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
  document.getElementById('today-session-name').addEventListener('change', async (e) => {
    if (!state.currentUser) return;
    const name = e.target.value.trim();
    const todayId = getLocalDateId();
    const ref = doc(db, 'users', state.currentUser.uid, 'sessions', todayId);
    if (name && name !== todayId) await setDoc(ref, { name, dateId: todayId }, { merge: true });
    else await deleteDoc(ref);
  });
}
