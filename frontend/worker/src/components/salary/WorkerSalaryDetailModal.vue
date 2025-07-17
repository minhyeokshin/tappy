<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-card">
      <header class="modal-header">
        <h2>급여 상세정보</h2>
        <button class="close-btn" @click="close">×</button>
      </header>
      <div class="salary-status">
        <span :class="['badge', payStatusClass]">{{ salary.payStatus }}</span>
      </div>
      <div class="salary-cards">
        <div class="salary-card" v-for="item in salaryItems" :key="item.label">
          <div class="icon">{{ item.icon }}</div>
          <div class="info-row">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <footer class="modal-footer">
        <button class="action-btn" @click="close">확인</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  salary: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close'])

const close = () => emit('close')

const salaryItems = computed(() => [
  { label: '시급', value: `${props.salary.hourlyWage?.toLocaleString()}원`, icon: '💸' },
  { label: '누적 근무시간', value: `${props.salary.totalWorkHours}시간`, icon: '⏰' },
  { label: '기본급', value: `${props.salary.baseSalary?.toLocaleString()}원`, icon: '💼' },
  { label: '주휴수당', value: `${props.salary.weeklyAllowance?.toLocaleString()}원`, icon: '🛌' },
  { label: '야간수당', value: `${props.salary.nightAllowance?.toLocaleString()}원`, icon: '🌙' },
  { label: '연장수당', value: `${props.salary.overtimeAllowance?.toLocaleString()}원`, icon: '⏳' },
  { label: '보너스', value: `${props.salary.bonus?.toLocaleString()}원`, icon: '🎁' },
  { label: '세전 합계', value: `${props.salary.totalBeforeTax?.toLocaleString()}원`, icon: '🧾' },
  { label: '세후 합계', value: `${props.salary.totalAfterTax?.toLocaleString()}원`, icon: '💰' },
  { label: '지급일', value: props.salary.payDate, icon: '📅' }
])

const payStatusClass = computed(() =>
  props.salary.payStatus === '지급완료' ? 'badge-success' : 'badge-pending'
)
</script>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(30,30,40,0.35);
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(4px);
}
.modal-card {
  background: rgba(255,255,255,0.97);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
  padding: 2.2rem 1.7rem 1.7rem 1.7rem;
  min-width: 320px; max-width: 95vw;
  width: 410px;
  display: flex; flex-direction: column;
  gap: 1.2rem;
  position: relative;
  font-family: 'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
}
@media (max-width: 500px) {
  .modal-card { width: 99vw; min-width: unset; padding: 1.2rem 0.5rem; }
}
.modal-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 0.2rem;
  letter-spacing: -0.5px;
}
.modal-header h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #222;
  letter-spacing: -1px;
}
.close-btn {
  background: none; border: none; font-size: 2.1rem; cursor: pointer;
  color: #222;
  transition: color 0.2s;
  margin-left: 0.5rem;
  line-height: 1;
}
.close-btn:hover { color: #1976d2; }
.salary-status {
  display: flex; justify-content: flex-end; margin-bottom: 0.2rem;
}
.badge {
  padding: 0.32em 1.1em; border-radius: 1.2em; font-size: 1.01em; font-weight: 700;
  background: #e3e8f7; color: #1976d2;
  letter-spacing: 0.2px;
  box-shadow: 0 1px 6px 0 rgba(25,118,210,0.07);
  border: 1px solid #e0e7ff;
}
.badge-success { background: #e0f7fa; color: #009688; border-color: #b2ebf2; }
.badge-pending { background: #fff3e0; color: #ff9800; border-color: #ffe0b2; }
.salary-cards {
  display: flex; flex-wrap: wrap; gap: 1.2rem 2.5%;
  justify-content: flex-start;
  margin-top: 0.2rem;
}
.salary-card {
  flex: 1 1 47%;
  background: rgba(255,255,255,0.82);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px 0 rgba(31,38,135,0.10);
  padding: 1.1rem 1.1rem 1rem 1.1rem;
  margin-bottom: 0.2rem;
  display: flex; align-items: center; gap: 0.9rem;
  min-width: 180px;
  max-width: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1.5px solid #f0f4fa;
  cursor: pointer;
}
.salary-card:hover {
  background: #f4faff;
  box-shadow: 0 4px 18px 0 rgba(25,118,210,0.13);
  border-color: #b6e0fe;
}
.salary-card .icon {
  font-size: 2.1rem;
  background: linear-gradient(135deg,#1976d2 60%,#42a5f5 100%);
  color: #fff;
  border-radius: 50%;
  width: 2.6rem; height: 2.6rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 1px 6px 0 rgba(25,118,210,0.13);
  flex-shrink: 0;
}
.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌우 끝 정렬 */
  width: 100%;
  white-space: nowrap;
  gap: 0.5em;
}
.label {
  color: #444;
  font-weight: 500;
  opacity: 0.8;
  font-size: 1.08em;
}
.value {
  color: #1976d2;
  font-weight: 700;
  font-size: 1.13em;
  margin-left: 1em;
}
.modal-footer {
  display: flex; justify-content: flex-end; margin-top: 0.7rem;
}
.action-btn {
  background: linear-gradient(90deg,#1976d2,#42a5f5);
  color: #fff; border: none; border-radius: 1.2em;
  padding: 0.7em 2em; font-size: 1.08em; font-weight: 700;
  cursor: pointer; box-shadow: 0 2px 8px 0 rgba(25,118,210,0.08);
  transition: background 0.2s, box-shadow 0.2s;
  letter-spacing: 0.1px;
}
.action-btn:hover {
  background: linear-gradient(90deg,#1565c0,#1976d2);
  box-shadow: 0 4px 16px 0 rgba(25,118,210,0.13);
}
:root.dark .modal-card, :root.dark .salary-card {
  background: rgba(30,30,40,0.97);
  color: #fff;
  border-color: #23263a;
}
:root.dark .salary-card .label { color: #bfcfff; }
:root.dark .salary-card .value { color: #90caf9; }
:root.dark .badge { background: #23263a; color: #90caf9; border-color: #23263a; }
</style> 