<template>
  <section class="salary-view">
    <h2>급여 내역</h2>
    <div class="salary-list">
      <div
        class="salary-row"
        v-for="s in salaries"
        :key="s.period"
        @click="openModal(s)"
        style="cursor:pointer"
      >
        <div class="salary-period">{{ s.period }}</div>
        <div class="salary-amount">{{ s.totalAfterTax.toLocaleString() }}원</div>
        <div class="salary-status" :class="s.payStatus === '지급완료' ? 'paid' : 'pending'">{{ s.payStatus }}</div>
      </div>
    </div>
    <WorkerSalaryDetailModal
      v-if="showModal"
      :salary="selected"
      @close="showModal = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import WorkerSalaryDetailModal from '@/components/salary/WorkerSalaryDetailModal.vue'
const salaries = [
  {
    period: '2024-06',
    hourlyWage: 10000,
    totalWorkHours: 120,
    baseSalary: 1200000,
    weeklyAllowance: 100000,
    nightAllowance: 50000,
    overtimeAllowance: 30000,
    bonus: 20000,
    totalBeforeTax: 1380000,
    totalAfterTax: 1300000,
    payDate: '2024-07-01',
    payStatus: '지급완료'
  },
  {
    period: '2024-05',
    hourlyWage: 10000,
    totalWorkHours: 110,
    baseSalary: 1100000,
    weeklyAllowance: 90000,
    nightAllowance: 40000,
    overtimeAllowance: 20000,
    bonus: 10000,
    totalBeforeTax: 1250000,
    totalAfterTax: 1200000,
    payDate: '2024-06-01',
    payStatus: '지급대기'
  }
]
const selected = ref(null)
const showModal = ref(false)
function openModal(salary) {
  selected.value = salary
  showModal.value = true
}
</script>

<style scoped>
.salary-view { padding: 2rem 1rem; }
.salary-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
.salary-row {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.1rem 1.5rem;
  display: flex; align-items: center; gap: 1.2rem;
  font-size: 1.08rem;
  transition: background 0.18s;
}
.salary-row:hover { background: #f4faff; }
.salary-period { font-weight: 700; color: #1976d2; min-width: 80px; }
.salary-amount { font-weight: 700; color: #00b48a; }
.salary-status { margin-left: auto; font-size: 0.98em; font-weight: 600; }
.salary-status.paid { color: #009688; }
.salary-status.pending { color: #ff9800; }
</style> 