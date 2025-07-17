<script setup>
import { ref, computed, onMounted } from 'vue'
import dayjs from 'dayjs'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// 더미 데이터 (실제 API 연동 시 교체)
const worktimeList = ref([
  { id: 1, date: '2024-06-01', hours: 8, in: '09:00', out: '18:00', store: 'TAPPY 강남점' },
  { id: 2, date: '2024-06-02', hours: 7, in: '09:10', out: '17:00', store: 'TAPPY 강남점' },
  { id: 3, date: '2024-06-03', hours: 8, in: '09:00', out: '18:00', store: 'TAPPY 신촌점' },
  { id: 4, date: '2024-06-04', hours: 6, in: '10:00', out: '16:00', store: 'TAPPY 신촌점' },
  { id: 5, date: '2024-06-05', hours: 8, in: '09:00', out: '18:00', store: 'TAPPY 홍대점' },
  { id: 6, date: '2024-06-06', hours: 0, in: '', out: '', store: 'TAPPY 강남점' },
  { id: 7, date: '2024-06-07', hours: 7, in: '09:30', out: '17:00', store: 'TAPPY 강남점' },
])

const totalHours = computed(() => worktimeList.value.reduce((sum, w) => sum + w.hours, 0))
const avgHours = computed(() => worktimeList.value.length ? (totalHours.value / worktimeList.value.length).toFixed(1) : 0)
const workDays = computed(() => worktimeList.value.filter(w => w.hours > 0).length)
const absentDays = computed(() => worktimeList.value.filter(w => w.hours === 0).length)

const chartData = computed(() => ({
  labels: worktimeList.value.map(w => dayjs(w.date).format('MM/DD')),
  datasets: [
    {
      label: '근무시간(시간)',
      backgroundColor: '#4fd1c5',
      data: worktimeList.value.map(w => w.hours),
      borderRadius: 12,
      barThickness: 24,
    },
  ],
}))
const chartOptions = ref({
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true, ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } },
})
</script>

<template>
  <section class="worktime-view">
    <div class="summary-row">
      <div class="summary-card">
        <div class="summary-label">이번주 총 근무시간</div>
        <div class="summary-value">{{ totalHours }}시간</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">평균 근무시간</div>
        <div class="summary-value">{{ avgHours }}시간</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">누적 근무일수</div>
        <div class="summary-value">{{ workDays }}일</div>
      </div>
      <div class="summary-card absent" v-if="absentDays">
        <div class="summary-label">결근</div>
        <div class="summary-value">{{ absentDays }}일</div>
      </div>
    </div>
    <div class="chart-card">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
    <div class="detail-list">
      <div class="detail-title">일별 근무 상세</div>
      <div class="detail-row" v-for="w in worktimeList" :key="w.id">
        <div class="detail-date">{{ dayjs(w.date).format('MM/DD (dd)') }}</div>
        <div class="detail-info">
          <span v-if="w.hours > 0">{{ w.in }} ~ {{ w.out }} ({{ w.hours }}시간)</span>
          <span v-else class="absent">결근</span>
          <span class="detail-store">{{ w.store }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.worktime-view {
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
}
.summary-row {
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.summary-card {
  background: rgba(255,255,255,0.10);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 0.9rem 1.2rem;
  min-width: 110px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.05rem;
  color: #fff;
}
.summary-card.absent {
  color: #ff6b6b;
}
.summary-label {
  font-size: 0.98rem;
  color: #b5b5b5;
  margin-bottom: 0.2rem;
}
.summary-value {
  font-weight: 700;
  font-size: 1.13rem;
}
.chart-card {
  background: rgba(255,255,255,0.08);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 1.2rem 0.7rem 0.7rem 0.7rem;
}
.detail-list {
  margin-top: 1.2rem;
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 1.2rem 1.2rem 0.7rem 1.2rem;
}
.detail-title {
  font-weight: 700;
  color: #4fd1c5;
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
}
.detail-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
}
.detail-date {
  min-width: 90px;
  color: #b5b5b5;
  font-size: 0.98rem;
}
.detail-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.1rem;
}
.detail-store {
  margin-left: auto;
  color: #b5b5b5;
  font-size: 0.98rem;
}
.absent {
  color: #ff6b6b;
  font-weight: 700;
}
</style> 