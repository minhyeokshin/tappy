<template>
  <section class="worktime-view">
    <h2>근무시간 관리</h2>
    <div class="summary-row">
      <div class="summary-card" v-for="s in summary" :key="s.label">
        <div class="summary-label">{{ s.label }}</div>
        <div class="summary-value">{{ s.value }}</div>
      </div>
    </div>
    <div class="detail-list">
      <div class="detail-title">알바별 근무 상세</div>
      <div class="detail-row" v-for="d in details" :key="d.user">
        <div class="detail-user">{{ d.user }}</div>
        <div class="detail-info">{{ d.info }}</div>
        <div class="detail-store">{{ d.store }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const summary = [
  { label: '이번주 총 근무시간', value: '120시간' },
  { label: '평균 근무시간', value: '8시간' },
  { label: '누적 근무일수', value: '15일' },
]
const details = [
  { user: '홍길동', info: '09:00 ~ 18:00 (8시간)', store: 'TAPPY 강남점' },
  { user: '김철수', info: '10:00 ~ 19:00 (8시간)', store: 'TAPPY 강남점' },
]
</script>

<style scoped>
.worktime-view {
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
}
.summary-row {
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}
.summary-card {
  background: rgba(255,255,255,0.10);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 0.9rem 1.2rem;
  min-width: 110px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.05rem;
  color: #222;
}
.summary-label {
  font-size: 0.98rem;
  color: #b5b5b5;
  margin-bottom: 0.2rem;
}
.summary-value {
  font-weight: 700;
  font-size: 1.13rem;
}
.detail-list {
  margin-top: 1.2rem;
  background: rgba(255,255,255,0.08);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 1.2rem 1.2rem 0.7rem 1.2rem;
}
.detail-title {
  font-weight: 700;
  color: #4fd1c5;
  margin-bottom: 0.7rem;
  font-size: 1.08rem;
}
.detail-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
}
.detail-user {
  min-width: 90px;
  color: #6366f1;
  font-weight: 700;
}
.detail-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.1rem;
}
.detail-store {
  margin-left: auto;
  color: #b5b5b5;
  font-size: 0.98rem;
}
</style> 