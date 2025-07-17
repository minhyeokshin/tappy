// 정기결제(구독) 관련 API
// 예시: 구독 상태 조회, 결제 유도

export async function fetchSubscriptionStatus({ token }) {
  return fetch('/api/subscription/status', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 