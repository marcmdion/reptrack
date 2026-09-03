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
import { getLocalDateId, showToast } from '../lib/utils.js';

const btnSaveBW = document.getElementById('btn-save-bw');
const inputBW = document.getElementById('input-bodyweight');
const dateInput = document.getElementById('input-date');
const statusLabel = document.getElementById('bw-status-label');
const display = document.getElementById('last-bw-display');

function setBwUi({ statusText, valueText }) {
  if (statusLabel) statusLabel.textContent = statusText;
  if (display) display.textContent = valueText;
}

export async function fetchBodyWeightStatus() {
  if (!state.currentUser) return;
  const icon = btnSaveBW.querySelector('i');
  const [y, m, d] = dateInput.value.split('-').map(Number);
  const selectedDateStr = new Date(y, m - 1, d).toLocaleDateString();
  const selectedDateId = dateInput.value;
  const isToday = selectedDateId === getLocalDateId();

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
      setBwUi({
        statusText: isToday ? 'Logged today' : 'Logged this session',
        valueText: `${inputBW.value} kg`,
      });
      inputBW.disabled = true;
      icon.className = 'fa-solid fa-pen text-gray-400';
      btnSaveBW.title = 'Edit body weight';
    } else {
      state.todayBWDocId = null;
      inputBW.disabled = false;
      icon.className = 'fa-solid fa-check';
      btnSaveBW.title = 'Save body weight';
      const snapLast = await getDocs(
        query(collection(db, 'users', state.currentUser.uid, 'bodyweight'), orderBy('timestamp', 'desc'), limit(1)),
      );
      if (!snapLast.empty) {
        inputBW.value = snapLast.docs[0].data().weight;
        setBwUi({
          statusText: isToday ? 'Last recorded' : 'Not logged this session',
          valueText: `${inputBW.value} kg`,
        });
      } else {
        setBwUi({
          statusText: isToday ? 'Not logged today' : 'Not logged this session',
          valueText: '—',
        });
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
      btnSaveBW.title = 'Save body weight';
      return;
    }

    let weight = parseFloat(inputBW.value);
    if (weight < 0 || !weight || !state.currentUser) return;
    weight = parseFloat(weight.toFixed(1));

    const [y, m, d] = dateInput.value.split('-').map(Number);
    const logDate = new Date(y, m - 1, d, 12, 0, 0);
    const isToday = dateInput.value === getLocalDateId();

    btnSaveBW.disabled = true;

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
      setBwUi({
        statusText: isToday ? 'Logged today' : 'Logged this session',
        valueText: `${weight} kg`,
      });
      inputBW.disabled = true;
      icon.className = 'fa-solid fa-pen text-gray-400';
      btnSaveBW.title = 'Edit body weight';
      showToast(`Saved: ${weight}kg`);
    } catch {
      showToast('Error saving', true);
    } finally {
      if (!inputBW.disabled) btnSaveBW.disabled = false;
    }
  });
}
