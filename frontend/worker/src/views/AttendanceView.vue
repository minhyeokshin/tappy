<script setup>
import QrScanner from '../components/attendance/QrScanner.vue'
import { ref, onMounted } from 'vue'
import { fetchAttendanceList, deleteAttendance } from '../api/attendance'
import dayjs from 'dayjs'

const logs = ref([])
const loading = ref(false)
const error = ref('')

async function fetchAttendance() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetchAttendanceList()
    logs.value = res.data
  } catch (e) {
    error.value = '출퇴근 기록을 불러오지 못했습니다.'
  } finally {
    loading.value = false
  }
}

async function handleCancel(id) {
  if (confirm('정말 이 출퇴근 기록을 취소(삭제)하시겠습니까?')) {
    await deleteAttendance(id)
    await fetchAttendance()
  }
}

onMounted(fetchAttendance)
</script>

<template>
  <section class="attendance-view">
    <h2>QR 출퇴근</h2>
    <QrScanner @success="fetchAttendance" />
    <div v-if="loading" class="loading">로딩 중...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="log-list">
      <div v-for="log in logs" :key="log.id" class="log-card">
        <span class="log-date">{{ log.date ? dayjs(log.date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD') }}</span>
        <span class="log-type" :class="log.type">{{ log.type }}</span>
        <span class="log-time">{{ log.time }}</span>
        <span class="log-store">{{ log.store }}</span>
        <button class="cancel-btn" @click="handleCancel(log.id)">취소</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.attendance-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.loading {
  color: #4fd1c5;
  font-weight: 700;
  margin-bottom: 1rem;
}
.error {
  color: #ff6b6b;
  font-weight: 700;
  margin-bottom: 1rem;
}
.log-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.log-card {
  background: rgba(255,255,255,0.08);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.1rem;
}
.log-date {
  color: #b5b5b5;
  font-size: 0.98rem;
  min-width: 100px;
}
.log-type {
  font-weight: 700;
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  background: #4fd1c5;
  color: #18191c;
  margin-right: 0.7rem;
}
.log-type.퇴근 {
  background: #6366f1;
  color: #fff;
}
.log-time {
  font-size: 1.1rem;
  font-weight: 500;
}
.log-store {
  margin-left: auto;
  font-size: 0.98rem;
  color: #b5b5b5;
}
.cancel-btn {
  margin-left: 1.2rem;
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.4rem 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
}
.cancel-btn:hover {
  background: #e53e3e;
}
</style> 