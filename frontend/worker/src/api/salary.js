// 시급/급여 관련 API
// 예시: 예상 급여 계산

export async function fetchSalary({ token }) {
  return fetch('/api/salary', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 