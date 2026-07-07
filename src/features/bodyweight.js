import {
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { showToast } from '../lib/utils.js';

const btnSaveBW = document.getElementById('btn-save-bw');
const inputBW = document.getElementById('input-bodyweight');
const dateInput = document.getElementById('input-date');

export async function fetchBodyWeightStatus() {
  if (!state.currentUser) return;
  const display = document.getElementById('last-bw-display');
  const icon = btnSaveBW.querySelector('i');
  const [y, m, d] = dateInput.value.split('-').map(Number);
  const selectedDateStr = new Date(y, m - 1, d).toLocaleDateString();

  try {
    const snapTarget = await getDocs(
      query(
        collection(db, 'users', state.currentUser.uid, 'bodyweight'),
        where('dateStr', '==', selectedDateStr),
        limit(1),
      ),
    );
    if (!snapTarget.empty) {
      state.todayBWDocId = snapTarget.docs[0].id;
      inputBW.value = snapTarget.docs[0].data().weight;
      display.textContent = `${inputBW.value}kg`;
      inputBW.disabled = true;
      icon.className = 'fa-solid fa-pen text-gray-400';
    } else {
      state.todayBWDocId = null;
      inputBW.disabled = false;
      icon.className = 'fa-solid fa-check';
      const snapLast = await getDocs(
        query(collection(db, 'users', state.currentUser.uid, 'bodyweight'), orderBy('timestamp', 'desc'), limit(1)),
      );
      if (!snapLast.empty) {
        inputBW.value = snapLast.docs[0].data().weight;
        display.textContent = `Prev: ${inputBW.value}kg`;
      } else {
        display.textContent = 'Not logged';
        inputBW.value = '';
      }
    }
  } catch {
    // preserve legacy silent catch
  }
}

export function initBodyweight() {
  dateInput.addEventListener('change', fetchBodyWeightStatus);

  btnSaveBW.addEventListener('click', async () => {
    const icon = btnSaveBW.querySelector('i');
    if (state.todayBWDocId && inputBW.disabled) {
      inputBW.disabled = false;
      inputBW.focus();
      icon.className = 'fa-solid fa-check';
      return;
    }

    let weight = parseFloat(inputBW.value);
    if (weight < 0 || !weight || !state.currentUser) return;
    weight = parseFloat(weight.toFixed(1));

    const [y, m, d] = dateInput.value.split('-').map(Number);
    const logDate = new Date(y, m - 1, d, 12, 0, 0);

    try {
      if (state.todayBWDocId)
        await updateDoc(doc(db, 'users', state.currentUser.uid, 'bodyweight', state.todayBWDocId), { weight });
      else {
        const docRef = await addDoc(collection(db, 'users', state.currentUser.uid, 'bodyweight'), {
          weight,
          timestamp: logDate,
          dateStr: logDate.toLocaleDateString(),
        });
        state.todayBWDocId = docRef.id;
      }
      document.getElementById('last-bw-display').textContent = `${weight}kg`;
      inputBW.disabled = true;
      icon.className = 'fa-solid fa-pen text-gray-400';
      showToast(`Saved: ${weight}kg`);
    } catch {
      showToast('Error saving', true);
    }
  });
}
