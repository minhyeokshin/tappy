// 알바/유저 관련 API
// 예시: 내 정보 조회

export async function fetchMyInfo({ token }) {
  return fetch('/api/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 