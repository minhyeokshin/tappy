<script setup>
import { ref } from 'vue';
import Header from './components/common/Header.vue';
import Sidebar from './components/common/Sidebar.vue';
import Footer from './components/common/Footer.vue';
const showSidebar = ref(false);
function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
function closeSidebar() {
  showSidebar.value = false;
}
</script>

<template>
  <div id="app">
    <Header @toggleSidebar="toggleSidebar" />
    <div class="main-layout">
      <Sidebar :showSidebar="showSidebar" @closeSidebar="closeSidebar" />
      <main class="content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
:root {
  --main-bg: linear-gradient(135deg, #23272f 0%, #18191c 100%);
  --main-card: rgba(32,34,40,0.90);
  --main-shadow: 0 6px 32px rgba(0,0,0,0.18);
  --main-blur: blur(18px);
  --main-white: #fff;
  --main-point: #4fd1c5;
}
#app {
  min-height: 100vh;
  background: var(--main-bg);
  font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
  color: var(--main-white);
  padding-bottom: 80px; /* 하단 네비게이션 바 공간 확보 */
}
.main-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  background: var(--main-card);
  border-radius: 32px;
  box-shadow: var(--main-shadow);
  min-height: 70vh;
  overflow: hidden;
  backdrop-filter: var(--main-blur);
}
.content {
  flex: 1;
  padding: 2.2rem 1.3rem 1.2rem 1.3rem;
  min-height: 80vh;
  background: transparent;
  color: var(--main-white);
  border-radius: 28px;
  font-size: 1.08rem;
}
@media (max-width: 600px) {
  .main-layout {
    max-width: 100vw;
    border-radius: 0;
    margin: 0;
  }
  .content {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0;
  }
}
</style>
