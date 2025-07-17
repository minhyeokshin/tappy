<template>
  <button class="fab">
    <span>설정</span>
  </button>
</template>

<style scoped>
.fab {
  position: fixed;
  right: 1.5rem;
  bottom: 2.5rem;
  background: #00e6b7;
  color: #18181c;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 100;
  transition: background 0.2s;
}
.fab:hover {
  background: #00b48a;
}
</style> 