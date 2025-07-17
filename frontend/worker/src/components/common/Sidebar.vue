<template>
  <transition name="sidebar-slide">
    <div v-if="showSidebar" class="sidebar-overlay" @click="$emit('closeSidebar')">
      <aside class="sidebar" @click.stop>
        <button class="close-btn" @click="$emit('closeSidebar')" aria-label="메뉴 닫기">×</button>
        <nav>
          <ul>
            <li><router-link to="/worker/attendance"><span class="icon">📲</span> 출퇴근</router-link></li>
            <li><router-link to="/worker/worktime"><span class="icon">⏰</span> 근무</router-link></li>
            <li><router-link to="/worker/salary"><span class="icon">💸</span> 급여</router-link></li>
            <li><router-link to="/worker/mypage"><span class="icon">👤</span> 마이</router-link></li>
          </ul>
        </nav>
      </aside>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({ showSidebar: Boolean });
const emit = defineEmits(['closeSidebar']);
</script>

<style scoped>
:root {
  --sidebar-bg: rgba(35,39,47,0.96);
  --sidebar-fg: #fff;
  --sidebar-active: #4fd1c5;
  --sidebar-hover: #23272f;
  --sidebar-overlay: rgba(0,0,0,0.60);
  --sidebar-blur: blur(18px);
}
.sidebar-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--sidebar-overlay);
  z-index: 2000;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
.sidebar {
  width: 85vw;
  max-width: 340px;
  height: 100vh;
  background: var(--sidebar-bg);
  color: var(--sidebar-fg);
  box-shadow: 0 10px 36px rgba(0,0,0,0.22);
  border-radius: 0 28px 28px 0;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: sidebarIn 0.22s cubic-bezier(.4,2,.6,1);
  backdrop-filter: var(--sidebar-blur);
}
@keyframes sidebarIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2.4rem;
  color: var(--sidebar-fg);
  cursor: pointer;
  z-index: 10;
}
ul {
  list-style: none;
  padding: 0;
  margin: 3rem 0 0 0;
}
li {
  margin: 2rem 0;
}
.router-link-active, .router-link-exact-active {
  background: var(--sidebar-active);
  color: #18191c !important;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(79,209,197,0.13);
}
a {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--sidebar-fg);
  font-weight: 800;
  text-decoration: none;
  border-radius: 18px;
  padding: 1.3rem 1.5rem;
  transition: background 0.2s, color 0.2s;
}
a:hover {
  background: var(--sidebar-hover);
  color: var(--sidebar-active);
}
.icon {
  margin-right: 1.3rem;
  font-size: 1.8rem;
}
.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  transition: opacity 0.2s;
}
.sidebar-slide-enter-from, .sidebar-slide-leave-to {
  opacity: 0;
}
</style> 