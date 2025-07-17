<template>
  <div class="card notification-card">
    <span class="label">공지사항</span>
    <ul>
      <li v-for="(notice, idx) in notices" :key="idx">{{ notice }}</li>
    </ul>
  </div>
</template>

<script setup>
const notices = [
  '5월 급여는 6월 5일에 지급됩니다.',
  '출퇴근 시 위치 인증 필수!'
]
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
  backdrop-filter: blur(8px);
}
.label {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  display: block;
}
ul {
  font-size: 1rem;
}
li {
  margin-bottom: 0.3rem;
}
</style> 