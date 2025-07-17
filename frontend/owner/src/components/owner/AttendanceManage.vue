<template>
  <div class="attendance-manage">
    <h2>근무 내역 관리</h2>
    <table>
      <thead>
        <tr>
          <th>알바명</th>
          <th>출근</th>
          <th>퇴근</th>
          <th>총 근무시간</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in logs" :key="log.id">
          <td>{{ log.workerName }}</td>
          <td>{{ log.in }}</td>
          <td>{{ log.out }}</td>
          <td>{{ log.total }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 실제 데이터 연동 필요 -->
  </div>
</template>

<script setup>
// TODO: 근무 내역 데이터 연동
const logs = [
  { id: 1, workerName: '홍길동', in: '09:00', out: '18:00', total: '9시간' },
  { id: 2, workerName: '김철수', in: '10:00', out: '19:00', total: '9시간' },
];
</script>

<style scoped>
.attendance-manage {
  padding: 2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 0.5rem;
}
</style> 