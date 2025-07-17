<template>
  <div class="card salary-card">
    <span class="label">이번달 예상 급여</span>
    <span class="salary">{{ salary }}원</span>
  </div>
</template>

<script setup>
const salary = 820000
</script>

<style scoped>
.card, .card * {
  color: #111 !important;
}
.card {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
}
.label {
  font-size: 0.95rem;
}
.salary {
  color: #00e6b7 !important;
  font-size: 1.3rem;
  font-weight: bold;
}
</style> 