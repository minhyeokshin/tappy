// 급여 관련 API (사장)
// 예시: 알바별 급여 계산, 시급 변경

export async function fetchWorkerSalary({ token, workerId }) {
  return fetch(`/api/salary/worker?workerId=${workerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
}

export async function updateHourlyWage({ token, workerId, wage }) {
  return fetch(`/api/salary/wage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ workerId, wage }),
  }).then(res => res.json());
} 