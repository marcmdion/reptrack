import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { getLocalDateId } from '../lib/utils.js';

export function getSelectedLogDateId() {
  const dateInput = document.getElementById('input-date');
  if (dateInput?.value) return dateInput.value;
  return getLocalDateId();
}

export function syncSessionNameInput() {
  const input = document.getElementById('today-session-name');
  if (!input) return;
  const dateId = getSelectedLogDateId();
  input.value = state.sessionsCache[dateId] || '';
  input.placeholder = 'Name this session...';
}

export async function saveSessionName(dateId, rawName) {
  if (!state.currentUser) return;
  const val = rawName.trim();
  const ref = doc(db, 'users', state.currentUser.uid, 'sessions', dateId);

  if (val && val !== dateId) {
    await setDoc(ref, { name: val, dateId }, { merge: true });
    state.sessionsCache[dateId] = val;
  } else {
    await deleteDoc(ref);
    delete state.sessionsCache[dateId];
  }
}
