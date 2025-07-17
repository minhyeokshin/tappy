<script setup>
import ProfileCard from '@/components/MyPage/ProfileCard.vue'
import WorkSummaryCard from '@/components/MyPage/WorkSummaryCard.vue'
import SalaryCard from '@/components/MyPage/SalaryCard.vue'
import NotificationCard from '@/components/MyPage/NotificationCard.vue'
import FloatingActionButton from '@/components/common/FloatingActionButton.vue'
</script>

<template>
  <div class="mypage-container">
    <ProfileCard />
    <WorkSummaryCard />
    <SalaryCard />
    <NotificationCard />
    <FloatingActionButton />
  </div>
</template>

<style scoped>
.mypage-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.5rem 1rem 5rem 1rem;
  background: var(--main-card);
  min-height: 100vh;
}
</style> 