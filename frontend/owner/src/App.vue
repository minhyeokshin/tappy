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
  --main-black: #181818;
  --main-gray: #f5f5f5;
  --main-border: #e0e0e0;
}
#app {
  min-height: 100vh;
  background: var(--main-gray);
  font-family: 'Pretendard', 'Noto Sans KR', Arial, sans-serif;
  color: var(--main-black);
}
.main-layout {
  display: flex;
  flex: 1;
  max-width: 1400px;
  margin: 2rem auto 0 auto;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  min-height: 70vh;
  overflow: hidden;
}
.content {
  flex: 1;
  padding: 2.5rem 2.5rem 1rem 2.5rem;
  min-height: 80vh;
  background: #fff;
  color: var(--main-black);
}
@media (max-width: 900px) {
  .main-layout {
    flex-direction: column;
    max-width: 100vw;
    border-radius: 0;
    margin: 0;
  }
  .content {
    padding: 1rem;
  }
}
</style>
