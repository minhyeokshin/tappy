// 근무시간 관련 API
// 예시: 일/주/월 근무시간 조회

export async function fetchWorktimeStats({ token, period }) {
  // period: 'day' | 'week' | 'month'
  return fetch(`/api/worktime?period=${period}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 