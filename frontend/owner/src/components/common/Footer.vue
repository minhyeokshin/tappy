<template>
  <footer class="footer-nav">
    <nav>
      <ul>
        <li><router-link to="/owner/attendance"><span class="icon">📲</span></router-link></li>
        <li><router-link to="/owner/worktime"><span class="icon">⏰</span></router-link></li>
        <li><router-link to="/owner/salary"><span class="icon">💸</span></router-link></li>
        <li><router-link to="/owner/mypage"><span class="icon">👤</span></router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
// modern 모바일 하단 네비게이션 바
</script>

<style scoped>
:root {
  --footer-bg: rgba(32,34,40,0.92);
  --footer-fg: #fff;
  --footer-active: #4fd1c5;
  --footer-hover: #23272f;
  --footer-shadow: 0 -6px 32px rgba(0,0,0,0.18);
  --footer-blur: blur(16px);
}
.footer-nav {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 68px;
  background: var(--footer-bg);
  color: var(--footer-fg);
  box-shadow: var(--footer-shadow);
  border-radius: 22px 22px 0 0;
  z-index: 100;
  margin: 0 auto;
  max-width: 600px;
  width: 100vw;
  backdrop-filter: var(--footer-blur);
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  flex: 1;
  text-align: center;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--footer-fg);
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0 0.2rem 0;
  border-radius: 18px;
  transition: background 0.2s, color 0.2s;
}
a:hover, .router-link-active, .router-link-exact-active {
  background: var(--footer-active);
  color: #18191c !important;
}
.icon {
  font-size: 1.7rem;
  margin-bottom: 0.1rem;
}
</style> 