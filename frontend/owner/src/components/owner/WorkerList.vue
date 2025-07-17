<template>
  <div class="worker-list">
    <h2>알바 목록</h2>
    <ul>
      <li v-for="worker in workers" :key="worker.id">
        {{ worker.name }} (시급: ₩{{ worker.wage }})
      </li>
    </ul>
    <!-- 실제 데이터 연동 필요 -->
  </div>
</template>

<script setup>
// TODO: 알바 목록 데이터 연동
const workers = [
  { id: 1, name: '홍길동', wage: 10000 },
  { id: 2, name: '김철수', wage: 11000 },
];
</script>

<style scoped>
.worker-list {
  padding: 2rem;
}
</style> 