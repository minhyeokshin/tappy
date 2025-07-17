<template>
  <section class="salary-view">
    <div class="tab-bar">
      <button :class="{active: tab==='list'}" @click="tab='list'">급여 내역</button>
      <button :class="{active: tab==='manage'}" @click="tab='manage'">알바별 시급 관리</button>
    </div>
    <div v-if="tab==='list'">
      <h2 class="title">급여 관리</h2>
      <div class="salary-list">
        <div
          class="salary-row"
          v-for="s in salaries"
          :key="s.user + s.period"
          @click="openModal(s)"
        >
          <div class="salary-user">{{ s.user }}</div>
          <div class="salary-amount">{{ s.amount.toLocaleString() }}원</div>
          <div class="salary-period">{{ s.period }}</div>
          <div class="salary-status" :class="s.payStatus === '지급완료' ? 'paid' : 'pending'">{{ s.payStatus }}</div>
        </div>
      </div>
      <OwnerSalaryDetailModal
        v-if="showModal"
        :salary="selected"
        @close="closeModal"
      />
    </div>
    <div v-else>
      <SalaryManage />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import OwnerSalaryDetailModal from '../components/owner/OwnerSalaryDetailModal.vue'
import SalaryManage from '../components/owner/SalaryManage.vue'
const tab = ref('list')
const salaries = [
  {
    user: '홍길동',
    amount: 1200000,
    period: '2024-05',
    hourlyWage: 10000,
    totalWorkHours: 120,
    baseSalary: 1200000,
    weeklyAllowance: 100000,
    nightAllowance: 50000,
    overtimeAllowance: 30000,
    bonus: 20000,
    totalBeforeTax: 1380000,
    totalAfterTax: 1300000,
    payDate: '2024-06-01',
    payStatus: '지급완료'
  },
  {
    user: '김철수',
    amount: 1100000,
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
function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
.salary-view {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  padding: 2.5rem 1.2rem 2rem 1.2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #e3f0ff 100%);
  font-family: 'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
}
.title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #222;
  margin-bottom: 0.7rem;
  letter-spacing: -1px;
}
.tab-bar {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
  justify-content: center;
}
.tab-bar button {
  background: rgba(255,255,255,0.7);
  border: none;
  border-radius: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.15rem;
  font-weight: 800;
  color: #1976d2;
  box-shadow: 0 2px 12px 0 rgba(25,118,210,0.08);
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  letter-spacing: -0.5px;
  backdrop-filter: blur(6px);
}
.tab-bar button.active {
  background: linear-gradient(90deg,#1976d2,#42a5f5);
  color: #fff;
  box-shadow: 0 4px 18px 0 rgba(25,118,210,0.13);
}
.salary-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
.salary-row {
  background: rgba(255,255,255,0.85);
  border-radius: 1.5rem;
  box-shadow: 0 4px 18px rgba(31,38,135,0.10);
  padding: 1.3rem 2rem;
  display: flex; align-items: center; gap: 1.5rem;
  font-size: 1.13rem;
  transition: background 0.18s, box-shadow 0.18s;
  cursor: pointer;
  border: 1.5px solid #e3e8f7;
}
.salary-row:hover {
  background: #f4faff;
  box-shadow: 0 8px 32px 0 rgba(25,118,210,0.13);
  border-color: #b6e0fe;
}
.salary-user {
  font-weight: 800;
  color: #1976d2;
  min-width: 90px;
  font-size: 1.12em;
}
.salary-amount {
  color: #222;
  font-weight: 800;
  font-size: 1.18rem;
}
.salary-period {
  margin-left: auto;
  color: #b5b5b5;
  font-size: 1.05rem;
  font-weight: 600;
}
.salary-status {
  margin-left: 1.2rem;
  font-size: 1.01em;
  font-weight: 700;
  border-radius: 1em;
  padding: 0.3em 1.1em;
  background: #e3e8f7;
  color: #1976d2;
}
.salary-status.paid { background: #e0f7fa; color: #009688; }
.salary-status.pending { background: #fff3e0; color: #ff9800; }
@media (max-width: 600px) {
  .salary-row { padding: 1rem 0.7rem; font-size: 1.01rem; }
  .tab-bar button { padding: 0.7rem 1.2rem; font-size: 1rem; }
}
</style> 