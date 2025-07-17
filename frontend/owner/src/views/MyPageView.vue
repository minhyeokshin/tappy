<template>
  <section class="mypage-view">
    <h2>마이페이지</h2>
    <div class="profile-card">
      <img class="avatar" :src="user.avatar" alt="프로필" />
      <div class="info">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>
      <button class="edit-btn">수정</button>
    </div>
    <div class="notice-card">
      <b>공지사항</b>
      <ul>
        <li v-for="n in notices" :key="n">{{ n }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const user = { name: '사장님', email: 'tappy@owner.com', avatar: '/img/avatar-default.png' }
const notices = [
  '정기결제는 6월 5일에 자동 결제됩니다.',
  '근무자 관리 메뉴에서 알바를 추가할 수 있습니다.'
]
</script>

<style scoped>
.mypage-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.2rem 1.3rem 1.2rem 1.3rem;
  max-width: 600px;
  margin: 0 auto;
}
.profile-card {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.info h3 {
  margin: 0;
  color: #111;
  font-size: 1.2rem;
}
.info p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}
.edit-btn {
  margin-left: auto;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
}
.notice-card {
  background: #f7f8fa;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.2rem;
  color: #222;
}
.notice-card ul {
  margin: 0.7em 0 0.7em 1.1em;
  padding: 0;
  list-style: disc;
}
.notice-card li {
  margin-bottom: 0.5em;
}
</style> 