// 근무시간 관련 API (사장)
// 예시: 알바별 근무시간 통계

export async function fetchWorkerWorktime({ token, workerId, period }) {
  return fetch(`/api/worktime/worker?workerId=${workerId}&period=${period}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 