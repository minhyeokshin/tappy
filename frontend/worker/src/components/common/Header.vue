<template>
  <header class="header">
    <button class="hamburger" @click="$emit('toggleSidebar')" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
    <div class="logo-area"><span class="logo-point">●</span> TAPPY</div>
    <div class="header-icons">
      <button class="icon-btn" aria-label="알림"><span>🔔</span></button>
      <button class="icon-btn" aria-label="내 정보"><span>👤</span></button>
    </div>
  </header>
</template>

<script setup>
// modern 모바일 헤더: 더 얇고, 투명+블러+포인트 컬러
</script>

<style scoped>
:root {
  --header-bg: rgba(32,34,40,0.75);
  --header-fg: #fff;
  --header-shadow: 0 2px 16px rgba(0,0,0,0.13);
  --header-blur: blur(16px);
  --point: #4fd1c5;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 48px;
  background: var(--header-bg);
  color: var(--header-fg);
  box-shadow: var(--header-shadow);
  border-radius: 0 0 18px 18px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: var(--header-blur);
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 0.3rem;
  padding: 0;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 3px;
  background: var(--header-fg);
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.3s;
}
.logo-area {
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 2px;
  color: var(--header-fg);
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}
.logo-point {
  color: var(--point);
  font-size: 1rem;
  margin-right: 0.1rem;
}
.header-icons {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.icon-btn {
  background: none;
  border: none;
  color: var(--header-fg);
  font-size: 1.1rem;
  padding: 0.4rem;
  border-radius: 50%;
  transition: background 0.2s;
  cursor: pointer;
  outline: none;
}
.icon-btn:active {
  background: rgba(79,209,197,0.12);
}
</style> 