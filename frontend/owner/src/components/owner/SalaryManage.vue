<template>
  <div class="salary-manage">
    <h2 class="title">알바별 시급 관리</h2>
    <div class="worker-list">
      <div class="worker-card" v-for="worker in workers" :key="worker.id">
        <div class="worker-info">
          <span class="worker-name">{{ worker.name }}</span>
          <span class="worker-wage">₩{{ worker.wage.toLocaleString() }}</span>
        </div>
        <div class="wage-edit-row">
          <input type="number" v-model="worker.newWage" placeholder="새 시급 입력" />
          <button class="edit-btn" @click="updateWage(worker)">변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const workers = ref([
  { id: 1, name: '홍길동', wage: 10000, newWage: '' },
  { id: 2, name: '김철수', wage: 11000, newWage: '' },
]);
function updateWage(worker) {
  // TODO: 시급 변경 API 연동
  alert(`${worker.name}의 시급을 ${worker.newWage}원으로 변경`);
}
</script>

<style scoped>
.salary-manage {
  padding: 1.5rem 0.5rem;
  background: none;
}
.title {
  font-size: 1.25rem;
  font-weight: 900;
  color: #1976d2;
  margin-bottom: 1.2rem;
  letter-spacing: -0.5px;
}
.worker-list {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
.worker-card {
  background: rgba(255,255,255,0.85);
  border-radius: 1.3rem;
  box-shadow: 0 4px 18px rgba(31,38,135,0.10);
  padding: 1.3rem 1.5rem 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  border: 1.5px solid #e3e8f7;
  transition: box-shadow 0.18s, background 0.18s;
}
.worker-card:hover {
  background: #f4faff;
  box-shadow: 0 8px 32px 0 rgba(25,118,210,0.13);
  border-color: #b6e0fe;
}
.worker-info {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.08rem;
}
.worker-name {
  font-weight: 800;
  color: #222;
  font-size: 1.13em;
}
.worker-wage {
  color: #1976d2;
  font-weight: 800;
  font-size: 1.13em;
  margin-left: auto;
}
.wage-edit-row {
  display: flex;
  gap: 0.7rem;
  align-items: center;
}
input[type='number'] {
  border: none;
  border-radius: 1.2rem;
  background: #f4faff;
  padding: 0.7em 1.2em;
  font-size: 1.08em;
  font-family: inherit;
  box-shadow: 0 1px 6px 0 rgba(25,118,210,0.07);
  outline: none;
  transition: box-shadow 0.18s, background 0.18s;
}
input[type='number']:focus {
  background: #e3f0ff;
  box-shadow: 0 2px 12px 0 rgba(25,118,210,0.13);
}
.edit-btn {
  background: linear-gradient(90deg,#1976d2,#42a5f5);
  color: #fff;
  border: none;
  border-radius: 1.2em;
  padding: 0.7em 2em;
  font-size: 1.08em;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(25,118,210,0.08);
  transition: background 0.2s, box-shadow 0.2s;
  letter-spacing: 0.1px;
}
.edit-btn:hover {
  background: linear-gradient(90deg,#1565c0,#1976d2);
  box-shadow: 0 4px 16px 0 rgba(25,118,210,0.13);
}
@media (max-width: 600px) {
  .worker-card { padding: 1rem 0.7rem; font-size: 1.01rem; }
}
</style> 