import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { cardioExercises } from '../lib/constants.js';
import { state } from '../lib/state.js';
import { showToast } from '../lib/utils.js';

export function initLogging() {
  const repSelect = document.getElementById('input-reps');
  for (let i = 1; i <= 30; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    repSelect.appendChild(opt);
  }

  const exerciseDropdown = document.getElementById('input-exercise');
  exerciseDropdown.addEventListener('change', (e) => {
    const selectedExercise = e.target.value;
    if (!selectedExercise) return;

    const isCardio = cardioExercises.includes(selectedExercise);
    const containerSets = document.getElementById('container-sets');
    const containerWeight = document.getElementById('container-weight');
    const containerReps = document.getElementById('container-reps');
    const labelWeight = document.getElementById('label-weight');

    if (isCardio) {
      containerSets.style.display = 'none';
      containerReps.style.display = 'none';
      containerWeight.classList.replace('col-span-1', 'col-span-3');
      labelWeight.textContent = 'Minutes';
      document.getElementById('input-weight').placeholder = 'e.g. 30';
      document.getElementById('input-reps').removeAttribute('required');
    } else {
      containerSets.style.display = 'block';
      containerReps.style.display = 'block';
      containerWeight.classList.replace('col-span-3', 'col-span-1');
      labelWeight.textContent = 'Load (kg/BW)';
      document.getElementById('input-weight').placeholder = 'kg / BW';
      document.getElementById('input-reps').setAttribute('required', 'true');
    }

    const lastLog = state.workoutsCache.find((w) => w.exercise === selectedExercise);
    if (lastLog) {
      if (!isCardio) {
        document.getElementById('input-set-count').value = lastLog.setCount || 1;
        document.getElementById('input-reps').value = lastLog.reps || '';
      }
      document.getElementById('input-weight').value = lastLog.weight;
    } else {
      if (!isCardio) {
        document.getElementById('input-set-count').value = 1;
        document.getElementById('input-reps').value = '';
      }
      document.getElementById('input-weight').value = '';
    }

    const adviceEl = document.getElementById('log-advice-1rm');
    const exWorkouts = state.workoutsCache.filter((w) => w.exercise === selectedExercise);

    if (isCardio) adviceEl.textContent = '';
    else {
      let best1RM = 0;
      exWorkouts.forEach((w) => {
        if (w.weight !== 'BW' && !isNaN(parseFloat(w.weight))) {
          const est = parseFloat(w.weight) * (1 + w.reps / 30);
          if (est > best1RM) best1RM = est;
        }
      });
      adviceEl.textContent = best1RM > 0 ? `~1RM: ${Math.round(best1RM)} kg` : '';
    }

    const recentHistoryEl = document.getElementById('log-recent-history');
    recentHistoryEl.innerHTML = '';
    exWorkouts.slice(0, 3).forEach((item) => {
      const dateObj = item.timestamp ? item.timestamp.toDate() : new Date();
      const dFmt = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
      const line = document.createElement('div');
      line.className = 'text-[10px] text-gray-500 font-mono tracking-wide';
      if (cardioExercises.includes(item.exercise)) line.textContent = `${dFmt} — ${item.weight} mins`;
      else
        line.textContent = `${dFmt} — ${item.setCount || 1} sets of ${item.weight === 'BW' ? 'BW' : `${item.weight}kg`} × ${item.reps}`;
      recentHistoryEl.appendChild(line);
    });
  });

  document.getElementById('input-weight').addEventListener('blur', (e) => {
    const val = e.target.value.trim().toUpperCase();
    if (val === 'BW') {
      e.target.value = 'BW';
      return;
    }
    if (val && !isNaN(val)) e.target.value = parseFloat(val).toFixed(1);
  });

  document.getElementById('log-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!state.currentUser) return;
    const exercise = document.getElementById('input-exercise').value;
    const weight = document.getElementById('input-weight').value;
    const reps = document.getElementById('input-reps').value;
    const numSets = document.getElementById('input-set-count').value;

    if (!exercise) {
      showToast('Select an exercise', true);
      return;
    }

    const isCardio = cardioExercises.includes(exercise);
    let formattedWeight =
      weight.trim().toUpperCase() === 'BW' && !isCardio ? 'BW' : parseFloat(parseFloat(weight).toFixed(1));

    if (formattedWeight !== 'BW' && isNaN(formattedWeight)) {
      showToast(isCardio ? 'Enter valid minutes' : 'Invalid weight', true);
      return;
    }
    document.getElementById('input-weight').value = formattedWeight === 'BW' ? 'BW' : formattedWeight.toFixed(1);

    try {
      const dateInput = document.getElementById('input-date');
      const [y, m, d] = dateInput.value.split('-').map(Number);
      const logDate = new Date(y, m - 1, d, 12, 0, 0);

      await addDoc(collection(db, 'users', state.currentUser.uid, 'workouts'), {
        exercise,
        weight: formattedWeight,
        reps: isCardio ? 0 : parseInt(reps),
        setCount: isCardio ? 1 : parseInt(numSets),
        timestamp: logDate,
        dateStr: logDate.toLocaleDateString(),
      });

      const toastMsg = isCardio
        ? `Logged: ${exercise} (${formattedWeight} mins)`
        : `Logged: ${exercise} (${numSets > 1 ? `${numSets} Sets` : 'Set'} - ${formattedWeight === 'BW' ? 'BW' : `${formattedWeight}kg`} x ${reps})`;
      showToast(
        toastMsg +
          (dateInput.value === new Date().toISOString().split('T')[0] ? '' : ` on ${logDate.toLocaleDateString()}`),
      );

      if (!isCardio) {
        document.getElementById('input-set-count').value = '1';
        document.getElementById('input-reps').value = '';
      }
      document.getElementById('input-exercise').value = '';
      document.getElementById('log-advice-1rm').textContent = '';
      document.getElementById('log-recent-history').innerHTML = '';
    } catch {
      showToast('Error saving workout', true);
    }
  });
}
