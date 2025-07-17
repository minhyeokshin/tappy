import httpClient from '../utils/httpRequest'

export async function fetchAttendanceList() {
  return httpClient.get('/api/attendance')
}

export async function postAttendance({ type, time, store, latitude, longitude }) {
  return httpClient.post('/api/attendance', { type, time, store, latitude, longitude })
}

export async function deleteAttendance(id) {
  return httpClient.delete(`/api/attendance/${id}`)
} 