// 유저 관련 API (사장/알바 공통)
// 예시: 내 정보, 알바 목록

export async function fetchMyInfo({ token }) {
  return fetch('/api/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
}

export async function fetchWorkerList({ token, storeId }) {
  return fetch(`/api/user/worker-list?storeId=${storeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
} 