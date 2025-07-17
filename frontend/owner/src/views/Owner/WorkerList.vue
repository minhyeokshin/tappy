<template>
  <div class="worker-list-view">
    <h1>알바 목록</h1>
    <WorkerList />
  </div>
</template>

<script setup>
import WorkerList from '../../components/owner/WorkerList.vue';
</script>

<style scoped>
.worker-list-view {
  padding: 2rem;
}
</style> 