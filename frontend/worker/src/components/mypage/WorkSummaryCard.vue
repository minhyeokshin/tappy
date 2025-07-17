<template>
  <div class="card work-summary-card">
    <div>
      <span class="label">이번달 누적 근무</span>
      <span class="value">{{ summary.hours }}시간</span>
    </div>
    <div>
      <span class="label">출근 횟수</span>
      <span class="value">{{ summary.days }}회</span>
    </div>
  </div>
</template>

<script setup>
const summary = {
  hours: 42,
  days: 12
}
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
  justify-content: space-between;
  gap: 1.5rem;
  backdrop-filter: blur(8px);
}
.label {
  font-size: 0.95rem;
}
.value {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 0.5rem;
}
</style> 