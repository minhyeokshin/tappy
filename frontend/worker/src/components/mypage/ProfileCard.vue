<template>
  <div class="card profile-card">
    <img class="avatar" :src="user.avatar" alt="프로필" />
    <div class="info">
      <h2>{{ user.name }}</h2>
      <p>{{ user.role }}</p>
    </div>
    <button class="edit-btn">수정</button>
  </div>
</template>

<script setup>
const user = {
  name: '홍길동',
  role: '알바생',
  avatar: '/img/avatar-default.png'
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
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(8px);
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.edit-btn {
  margin-left: auto;
  background: #222;
  color: #fff !important;
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
}
</style> 