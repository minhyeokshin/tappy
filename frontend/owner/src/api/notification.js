// 알림 관련 API (사장)
// 예시: 알림 목록 조회

export async function fetchNotifications({ token }) {
  return fetch('/api/notification', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 