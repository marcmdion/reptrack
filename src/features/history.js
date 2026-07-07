import { doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { cardioExercises } from '../lib/constants.js';
import { db } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { escapeHtml, getLocalDateId, showToast } from '../lib/utils.js';
import { deleteLog, refreshHistoryView } from './listeners.js';

export function attachEditListeners(el, item, isTodayView = false) {
  el.querySelector('.edit-log-btn').addEventListener('click', () => {
    const isCardio = cardioExercises.includes(item.exercise);
    const wDisplay = item.weight === 'BW' ? 'BW' : item.weight;

    if (item.type === 'workout') {
      const safeId = escapeHtml(item.id);
      el.innerHTML = `
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="font-semibold text-[#00E676] text-sm">${escapeHtml(item.exercise)}</div>
          ${
            isCardio
              ? `
            <div class="flex items-center gap-2">
              <input type="number" id="edit-mins-${safeId}" value="${escapeHtml(item.weight)}" class="w-full bg-[#111] text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#333]" placeholder="Minutes">
            </div>
          `
              : `
            <div class="flex items-center gap-2">
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Sets</label>
                <input type="number" id="edit-sets-${safeId}" value="${escapeHtml(item.setCount || 1)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Load</label>
                <input type="text" id="edit-weight-${safeId}" value="${escapeHtml(wDisplay)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
              <div class="flex-1">
                <label class="text-[9px] text-gray-500 uppercase px-1">Reps</label>
                <input type="number" id="edit-reps-${safeId}" value="${escapeHtml(item.reps)}" class="w-full bg-[#111] text-white p-2.5 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#333]">
              </div>
            </div>
          `
          }
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-gray-400 text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#111] transition">Cancel</button>
              <button class="save-btn bg-[#00E676] text-black text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `;
    } else if (item.type === 'bodyweight') {
      const safeId = escapeHtml(item.id);
      el.innerHTML = `
        <div class="flex flex-col gap-3 w-full animate-fade-in py-1">
          <div class="flex items-center gap-2 text-[#00E676]"><i class="fa-solid fa-weight-scale text-xs"></i><span class="font-semibold text-sm">Body Weight</span></div>
          <input type="number" id="edit-bw-${safeId}" value="${escapeHtml(item.weight)}" step="0.1" class="w-full bg-[#111] text-white p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#333]" placeholder="kg">
          <div class="flex justify-between items-center mt-1 pt-2">
            <button class="delete-btn text-red-500/80 hover:text-red-500 text-xs font-bold px-2 py-1 transition"><i class="fa-solid fa-trash-can mr-1"></i> Delete</button>
            <div class="flex gap-2">
              <button class="cancel-btn text-gray-400 text-xs font-bold px-3 py-2 rounded-lg hover:bg-[#111] transition">Cancel</button>
              <button class="save-btn bg-[#00E676] text-black text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">Save</button>
            </div>
          </div>
        </div>
      `;
    }

    el.querySelector('.cancel-btn').addEventListener('click', () => {
      if (isTodayView) renderToday(state.workoutsCache);
      else refreshHistoryView();
    });

    el.querySelector('.delete-btn').addEventListener('click', () => {
      deleteLog(item.id, item.type === 'workout' ? 'workouts' : 'bodyweight');
    });

    el.querySelector('.save-btn').addEventListener('click', async () => {
      try {
        let updateData = {};
        if (item.type === 'bodyweight') {
          const w = parseFloat(document.getElementById(`edit-bw-${item.id}`).value);
          if (isNaN(w) || w < 0) throw new Error();
          updateData = { weight: parseFloat(w.toFixed(1)) };
        } else if (isCardio) {
          const m = parseFloat(document.getElementById(`edit-mins-${item.id}`).value);
          if (isNaN(m) || m < 0) throw new Error();
          updateData = { weight: parseFloat(m.toFixed(1)) };
        } else {
          const s = parseInt(document.getElementById(`edit-sets-${item.id}`).value);
          const r = parseInt(document.getElementById(`edit-reps-${item.id}`).value);
          const wRaw = document.getElementById(`edit-weight-${item.id}`).value.trim().toUpperCase();
          const w = wRaw === 'BW' ? 'BW' : parseFloat(parseFloat(wRaw).toFixed(1));

          if (isNaN(s) || s < 1 || isNaN(r) || r < 0 || (w !== 'BW' && (isNaN(w) || w < 0))) throw new Error();
          updateData = { setCount: s, reps: r, weight: w };
        }

        await updateDoc(
          doc(db, 'users', state.currentUser.uid, item.type === 'workout' ? 'workouts' : 'bodyweight', item.id),
          updateData,
        );
        showToast('Updated successfully');
      } catch {
        showToast('Invalid values', true);
      }
    });
  });
}

export function renderHistory(items) {
  const container = document.getElementById('history-list');
  if (items.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-500 mt-10 text-sm">No history yet.</div>';
    return;
  }

  const grouped = {};
  const dateIds = {};
  items.forEach((item) => {
    const dateObj = item.timestamp ? item.timestamp.toDate() : new Date();
    const dateStr = dateObj.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    const dateId = getLocalDateId(dateObj);
    if (!grouped[dateStr]) {
      grouped[dateStr] = [];
      dateIds[dateStr] = dateId;
    }
    grouped[dateStr].push(item);
  });

  container.innerHTML = '';
  Object.keys(grouped).forEach((dateStr) => {
    const dateId = dateIds[dateStr];
    const sessionName = state.sessionsCache[dateId] || '';
    const displaySessionName = sessionName || dateId;

    const dayContainer = document.createElement('div');
    dayContainer.className = 'mb-8';

    const dateHeader = document.createElement('div');
    dateHeader.className = 'flex justify-between items-end border-b border-[#1a1a1a] pb-2 mb-2';

    const leftDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    dateSpan.className = 'text-[10px] text-[#00E676] uppercase tracking-widest font-semibold';
    dateSpan.textContent = dateStr;
    leftDiv.appendChild(dateSpan);

    const nameContainer = document.createElement('div');
    nameContainer.className = 'flex items-center gap-2 group cursor-pointer mt-1';
    const nameSpan = document.createElement('span');
    nameSpan.className = 'text-white text-lg font-bold';
    nameSpan.textContent = displaySessionName;
    const nameEditIcon = document.createElement('i');
    nameEditIcon.className = 'fa-solid fa-pen text-gray-700 text-[10px] opacity-0 group-hover:opacity-100 transition ml-2';
    nameContainer.append(nameSpan, nameEditIcon);

    nameContainer.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = sessionName;
      input.placeholder = dateId;
      input.className =
        'bg-transparent text-white text-lg font-bold focus:outline-none border-b border-[#333] w-full max-w-[200px]';
      leftDiv.replaceChild(input, nameContainer);
      input.focus();
      const save = async () => {
        const val = input.value.trim();
        if (val !== sessionName) {
          if (val && val !== dateId)
            await setDoc(doc(db, 'users', state.currentUser.uid, 'sessions', dateId), { name: val, dateId }, { merge: true });
          else await deleteDoc(doc(db, 'users', state.currentUser.uid, 'sessions', dateId));
        }
        leftDiv.replaceChild(nameContainer, input);
      };
      input.addEventListener('blur', save);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.blur();
      });
    });

    leftDiv.appendChild(nameContainer);
    dateHeader.appendChild(leftDiv);
    const countSpan = document.createElement('span');
    countSpan.className = 'text-[10px] text-gray-500 font-mono';
    countSpan.textContent = `${grouped[dateStr].length} logs`;
    dateHeader.appendChild(countSpan);
    dayContainer.appendChild(dateHeader);

    const listContainer = document.createElement('div');
    grouped[dateStr].forEach((item) => {
      const el = document.createElement('div');
      el.className =
        'flex justify-between items-center py-3 border-b border-[#111] last:border-0 group transition-colors';
      if (item.type === 'workout') {
        const isCardio = cardioExercises.includes(item.exercise);
        const wDisplay = item.weight === 'BW' ? 'BW' : `${item.weight}kg`;
        el.innerHTML = `
          <div class="flex-1">
            <div class="font-semibold text-gray-200 text-sm">${escapeHtml(item.exercise)} <span class="text-[9px] text-gray-500 font-normal ml-1">${item.setCount > 1 ? escapeHtml(`${item.setCount} SETS`) : ''}</span></div>
            <div class="text-xs text-gray-500 mt-0.5">${isCardio ? `${escapeHtml(item.weight)} mins` : `${escapeHtml(wDisplay)} × ${escapeHtml(item.reps)}`}</div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-xs font-mono text-gray-600">${isCardio ? '<i class="fa-solid fa-stopwatch"></i>' : item.weight === 'BW' ? '-' : (item.weight * item.reps * (item.setCount || 1)).toFixed(0)}</div>
            <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
          </div>
        `;
      } else if (item.type === 'bodyweight') {
        el.innerHTML = `
          <div class="flex-1 flex items-center gap-2"><i class="fa-solid fa-weight-scale text-gray-500 text-xs"></i><span class="font-semibold text-gray-200 text-sm">Body Weight</span></div>
          <div class="flex items-center gap-3">
            <div class="font-bold text-white text-sm">${escapeHtml(item.weight)}kg</div>
            <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
          </div>
        `;
      }
      attachEditListeners(el, item, false);
      listContainer.appendChild(el);
    });
    dayContainer.appendChild(listContainer);
    container.appendChild(dayContainer);
  });
}

export function renderToday(workouts) {
  const container = document.getElementById('today-list');
  const todayStr = new Date().toLocaleDateString();
  const todayWorkouts = workouts.filter((w) => w.timestamp && w.timestamp.toDate().toLocaleDateString() === todayStr);

  if (todayWorkouts.length === 0) {
    container.innerHTML = '<div class="text-gray-600 text-xs tracking-wide">Ready to work.</div>';
    return;
  }

  container.innerHTML = '';
  todayWorkouts.forEach((w) => {
    const el = document.createElement('div');
    el.className = 'flex justify-between items-center py-3 border-b border-[#111] last:border-0 group';
    const isCardio = cardioExercises.includes(w.exercise);
    const wDisplay = w.weight === 'BW' ? 'BW' : `${w.weight}kg`;

    el.innerHTML = `
      <div class="flex-1">
        <div class="font-semibold text-gray-200 text-sm">${escapeHtml(w.exercise)} <span class="text-[9px] text-gray-500 font-normal ml-1">${(w.setCount || 1) > 1 ? escapeHtml(`${w.setCount} SETS`) : ''}</span></div>
        <div class="text-xs text-gray-500 mt-0.5">${isCardio ? `${escapeHtml(w.weight)} mins` : `${escapeHtml(w.weight === 'BW' ? 'BW' : `${w.weight}kg`)} × ${escapeHtml(w.reps)}`}</div>
      </div>
      <div class="flex items-center gap-1">
        <button class="edit-log-btn text-gray-600 hover:text-[#00E676] transition p-2"><i class="fa-solid fa-pen"></i></button>
      </div>
    `;

    attachEditListeners(el, w, true);
    container.appendChild(el);
  });
}
