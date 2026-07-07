import { cardioExercises, chartColors } from '../lib/constants.js';
import { state } from '../lib/state.js';

let chartSelectWired = false;

function initChart() {
  const Chart = state.chartModule;
  const ctx = document.getElementById('progressChart').getContext('2d');
  Chart.defaults.color = '#6B7280';
  Chart.defaults.font.family = 'Inter';
  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: { labels: [], datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { color: '#9CA3AF', boxWidth: 8, font: { size: 10 } },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: '#111',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderColor: '#333',
          borderWidth: 1,
        },
      },
      scales: {
        y: { border: { display: false }, grid: { color: '#111', drawBorder: false } },
        x: { border: { display: false }, grid: { display: false } },
      },
    },
  });
}

function wireChartSelect() {
  if (chartSelectWired) return;
  chartSelectWired = true;
  document.getElementById('chart-exercise-select').addEventListener('change', (e) => renderChart(e.target.value));
}

export async function ensureChartReady() {
  if (!state.chartModule) {
    const chartModule = await import('chart.js/auto');
    state.chartModule = chartModule.default;
  }
  if (!state.chartInstance) {
    initChart();
    wireChartSelect();
    if (state.allWorkoutsCache.length) {
      const exerciseSelect = document.getElementById('chart-exercise-select');
      renderChart(exerciseSelect.value || 'All');
    }
  }
  return state.chartInstance;
}

export function updateChartData(workouts) {
  state.allWorkoutsCache = workouts;
  const exercises = [...new Set(workouts.map((w) => w.exercise))].sort();
  const exerciseSelect = document.getElementById('chart-exercise-select');
  const currentSel = exerciseSelect.value || 'All';

  exerciseSelect.innerHTML = '<option value="All">Overview</option><option value="Body Weight">Body Weight</option>';
  exercises.forEach((ex) => {
    const opt = document.createElement('option');
    opt.value = ex;
    opt.textContent = ex;
    exerciseSelect.appendChild(opt);
  });
  exerciseSelect.value = exercises.includes(currentSel) || currentSel === 'Body Weight' ? currentSel : 'All';
  renderChart(exerciseSelect.value);
}

export function renderChart(targetExercise) {
  if (!state.chartInstance) return;
  const relData =
    targetExercise === 'All'
      ? [...state.allWorkoutsCache, ...state.bodyweightCache]
      : targetExercise === 'Body Weight'
        ? state.bodyweightCache
        : state.allWorkoutsCache.filter((w) => w.exercise === targetExercise);

  if (relData.length === 0) {
    state.chartInstance.data.labels = [];
    state.chartInstance.data.datasets = [];
    state.chartInstance.update();
    ['stat-est-1rm', 'stat-max-weight', 'stat-total-volume', 'stat-total-reps'].forEach(
      (id) => (document.getElementById(id).textContent = '-'),
    );
    return;
  }

  const dateMap = new Map();
  relData.forEach((item) => {
    if (item.timestamp)
      dateMap.set(
        item.timestamp.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        item.timestamp.toDate(),
      );
  });
  const sortedLabels = Array.from(dateMap.keys()).sort((a, b) => dateMap.get(a) - dateMap.get(b));
  const datasets = [];

  if (targetExercise !== 'Body Weight') {
    const exList =
      targetExercise === 'All' ? [...new Set(state.allWorkoutsCache.map((w) => w.exercise))] : [targetExercise];
    exList.forEach((ex, i) => {
      const map = {};
      state.allWorkoutsCache
        .filter((w) => w.exercise === ex && w.timestamp)
        .forEach((w) => {
          const d = w.timestamp.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
          const v = w.weight === 'BW' ? null : parseFloat(w.weight);
          if (v !== null && (!map[d] || v > map[d])) map[d] = v;
        });
      datasets.push({
        label: ex,
        data: sortedLabels.map((l) => map[l] || null),
        borderColor: chartColors[i % chartColors.length],
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        spanGaps: true,
      });
    });
  }

  if (targetExercise === 'All' || targetExercise === 'Body Weight') {
    const map = {};
    state.bodyweightCache.forEach((bw) => {
      if (bw.timestamp)
        map[bw.timestamp.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric' })] = bw.weight;
    });
    datasets.push({
      label: 'Body Weight',
      data: sortedLabels.map((l) => map[l] || null),
      borderColor: '#333',
      borderDash: [5, 5],
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      spanGaps: true,
    });
  }

  state.chartInstance.data.labels = sortedLabels;
  state.chartInstance.data.datasets = datasets;
  state.chartInstance.update();

  if (targetExercise === 'All' || targetExercise === 'Body Weight') {
    ['stat-est-1rm', 'stat-max-weight', 'stat-total-volume', 'stat-total-reps'].forEach(
      (id) => (document.getElementById(id).textContent = '-'),
    );
    document.querySelector('#stat-max-weight').previousElementSibling.textContent = 'Peak Load';
    if (targetExercise === 'Body Weight' && datasets[0].data.filter((n) => n).length) {
      document.getElementById('stat-max-weight').textContent = `${datasets[0].data.filter((n) => n).pop()}kg`;
      document.querySelector('#stat-max-weight').previousElementSibling.textContent = 'Current Weight';
    }
  } else {
    let maxW = 0;
    let best1RM = 0;
    let vol = 0;
    let reps = 0;
    const isCardio = cardioExercises.includes(targetExercise);
    state.allWorkoutsCache
      .filter((w) => w.exercise === targetExercise)
      .forEach((w) => {
        const weight = w.weight === 'BW' ? 0 : parseFloat(w.weight);
        const r = w.reps || 0;
        const s = w.setCount || 1;
        if (weight > maxW) maxW = weight;
        if (!isCardio && w.weight !== 'BW') {
          const est = weight * (1 + r / 30);
          if (est > best1RM) best1RM = est;
          vol += weight * r * s;
          reps += r * s;
        }
      });
    if (isCardio) {
      document.querySelector('#stat-max-weight').previousElementSibling.textContent = 'Longest Time';
      document.getElementById('stat-max-weight').textContent = `${maxW} mins`;
      ['stat-est-1rm', 'stat-total-volume', 'stat-total-reps'].forEach(
        (id) => (document.getElementById(id).textContent = '-'),
      );
    } else {
      document.querySelector('#stat-max-weight').previousElementSibling.textContent = 'Peak Load';
      document.getElementById('stat-est-1rm').textContent = `${Math.round(best1RM)}kg`;
      document.getElementById('stat-max-weight').textContent = `${maxW}kg`;
      document.getElementById('stat-total-volume').textContent = vol > 1000 ? `${(vol / 1000).toFixed(1)}k` : vol;
      document.getElementById('stat-total-reps').textContent = reps;
    }
  }
}
