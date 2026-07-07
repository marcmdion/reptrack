import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { orderedDefaults } from '../lib/constants.js';
import { state } from '../lib/state.js';
import { showToast } from '../lib/utils.js';

const getSettingsRef = () => doc(db, 'users', state.currentUser.uid, 'settings', 'exercises');

export async function fetchUserExercises() {
  if (!state.currentUser) return;
  const ref = getSettingsRef();
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();

    if (data.listVersion !== 2) {
      const lowerDefaults = orderedDefaults.map((e) => e.toLowerCase());
      let custom = (data.list || []).filter((ex) => !lowerDefaults.includes(ex.toLowerCase()));

      const seen = new Set(lowerDefaults);
      custom = custom.filter((ex) => {
        const lower = ex.toLowerCase();
        if (seen.has(lower)) return false;
        seen.add(lower);
        return true;
      });

      state.availableExercises = [...orderedDefaults, ...custom];
    } else {
      const savedList = data.list || [];

      const uniqueList = [];
      const seen = new Set();
      for (const ex of savedList) {
        const lower = ex.toLowerCase();
        if (!seen.has(lower)) {
          seen.add(lower);
          uniqueList.push(ex);
        }
      }

      const missingDefaults = orderedDefaults.filter((def) => !seen.has(def.toLowerCase()));
      state.availableExercises = [...uniqueList, ...missingDefaults];
    }
  } else {
    state.availableExercises = [...orderedDefaults];
  }

  await setDoc(ref, { list: state.availableExercises, listVersion: 2 }, { merge: true });
  updateExerciseDropdown();
}

async function addExerciseToList(name) {
  if (!name) return;
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const lowerName = name.toLowerCase();
  const exists = state.availableExercises.some((ex) => ex.toLowerCase() === lowerName);

  if (!exists) {
    state.availableExercises.push(name);
    updateExerciseDropdown();
    await setDoc(getSettingsRef(), { list: state.availableExercises }, { merge: true });
    const dropdown = document.getElementById('input-exercise');
    dropdown.value = name;
    dropdown.dispatchEvent(new Event('change'));
  }
}

async function removeExerciseFromList(name) {
  state.availableExercises = state.availableExercises.filter((e) => e !== name);
  updateExerciseDropdown();
  await setDoc(getSettingsRef(), { list: state.availableExercises }, { merge: true });
  renderManagerList();
}

function updateExerciseDropdown() {
  const dropdown = document.getElementById('input-exercise');
  const currentVal = dropdown.value;
  dropdown.innerHTML = '<option value="" disabled selected>Select Exercise</option>';
  state.availableExercises.forEach((ex) => {
    const opt = document.createElement('option');
    opt.value = ex;
    opt.textContent = ex;
    dropdown.appendChild(opt);
  });
  if (state.availableExercises.includes(currentVal)) dropdown.value = currentVal;
}

const modal = document.getElementById('exercise-modal');
const managerList = document.getElementById('manage-exercise-list');

async function moveExercise(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= state.availableExercises.length) return;
  const temp = state.availableExercises[index];
  state.availableExercises[index] = state.availableExercises[targetIndex];
  state.availableExercises[targetIndex] = temp;
  renderManagerList();
  updateExerciseDropdown();
  await setDoc(getSettingsRef(), { list: state.availableExercises }, { merge: true });
}

async function performRename(oldName, newNameRaw) {
  let newName = newNameRaw.trim();
  const existingMatch = state.availableExercises.find((e) => e.toLowerCase() === newName.toLowerCase());
  if (existingMatch) newName = existingMatch;

  try {
    showToast('Updating records...');
    const workoutsRef = collection(db, 'users', state.currentUser.uid, 'workouts');
    const q = query(workoutsRef, where('exercise', '==', oldName));
    const snap = await getDocs(q);

    const promises = [];
    snap.forEach((docSnap) =>
      promises.push(
        updateDoc(doc(db, 'users', state.currentUser.uid, 'workouts', docSnap.id), { exercise: newName }),
      ),
    );
    await Promise.all(promises);

    const index = state.availableExercises.indexOf(oldName);
    if (index > -1) {
      if (state.availableExercises.includes(newName) && newName !== oldName) state.availableExercises.splice(index, 1);
      else state.availableExercises[index] = newName;
    } else if (!state.availableExercises.includes(newName)) state.availableExercises.push(newName);

    await setDoc(getSettingsRef(), { list: state.availableExercises }, { merge: true });
    updateExerciseDropdown();
    renderManagerList();
    showToast(`Merged/Renamed to "${newName}"`);

    const dropdown = document.getElementById('input-exercise');
    if (dropdown.value === oldName || dropdown.value === newName) {
      dropdown.value = newName;
      dropdown.dispatchEvent(new Event('change'));
    }
  } catch {
    showToast('Error updating records', true);
    renderManagerList();
  }
}

function renderManagerList() {
  managerList.innerHTML = '';
  state.availableExercises.forEach((ex, index) => {
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center py-3 border-b border-[#111] last:border-0';

    const nameContainer = document.createElement('div');
    nameContainer.className = 'flex-1 min-w-0 mr-2';

    const nameText = document.createElement('span');
    nameText.className = 'text-sm text-gray-200 block w-full';
    nameText.textContent = ex;
    nameContainer.appendChild(nameText);

    const controls = document.createElement('div');
    controls.className = 'flex gap-3 items-center shrink-0';

    const upBtn = document.createElement('button');
    upBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    upBtn.className = `text-gray-600 hover:text-white transition ${index === 0 ? 'opacity-30 cursor-not-allowed' : ''}`;
    upBtn.onclick = () => {
      if (index > 0) moveExercise(index, -1);
    };

    const downBtn = document.createElement('button');
    downBtn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
    downBtn.className = `text-gray-600 hover:text-white transition ${index === state.availableExercises.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`;
    downBtn.onclick = () => {
      if (index < state.availableExercises.length - 1) moveExercise(index, 1);
    };

    const renameBtn = document.createElement('button');
    renameBtn.innerHTML = '<i class="fa-solid fa-pen text-[10px]"></i>';
    renameBtn.className =
      'w-6 h-6 rounded-full bg-[#111] text-white hover:bg-[#222] transition flex items-center justify-center ml-2';

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    delBtn.className = 'text-red-500/70 hover:text-red-400 transition ml-1';
    delBtn.onclick = () => removeExerciseFromList(ex);

    renameBtn.onclick = () => {
      upBtn.style.display = 'none';
      downBtn.style.display = 'none';
      delBtn.style.display = 'none';
      const input = document.createElement('input');
      input.type = 'text';
      input.value = ex;
      input.className = 'w-full bg-[#111] text-white text-sm p-2 rounded-lg focus:outline-none';
      nameContainer.replaceChild(input, nameText);
      input.focus();

      renameBtn.innerHTML = '<i class="fa-solid fa-check text-[#00E676]"></i>';
      const saveChange = async () => {
        if (input.value && input.value !== ex) await performRename(ex, input.value);
        else renderManagerList();
      };
      renameBtn.onclick = saveChange;
      input.onkeydown = (e) => {
        if (e.key === 'Enter') saveChange();
      };
    };

    controls.append(upBtn, downBtn, renameBtn, delBtn);
    div.append(nameContainer, controls);
    managerList.appendChild(div);
  });
}

export function initExercises() {
  document.getElementById('open-manager-btn').addEventListener('click', () => {
    modal.classList.remove('hidden');
    renderManagerList();
  });
  document.getElementById('close-modal-btn').addEventListener('click', () => modal.classList.add('hidden'));

  document.getElementById('add-exercise-btn').addEventListener('click', () => {
    const input = document.getElementById('new-exercise-input');
    if (input.value) {
      addExerciseToList(input.value);
      input.value = '';
      renderManagerList();
      modal.classList.add('hidden');
    }
  });
}
