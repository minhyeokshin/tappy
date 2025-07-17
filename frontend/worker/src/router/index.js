import { createRouter, createWebHistory } from 'vue-router'

const AttendanceView = () => import('../views/AttendanceView.vue')
const WorktimeView = () => import('../views/WorktimeView.vue')
const SalaryView = () => import('../views/SalaryView.vue')
const MyPageView = () => import('../views/MyPageView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/worker/attendance' },
    { path: '/worker/attendance', name: 'attendance', component: AttendanceView },
    { path: '/worker/worktime', name: 'worktime', component: WorktimeView },
    { path: '/worker/salary', name: 'salary', component: SalaryView },
    { path: '/worker/mypage', name: 'mypage', component: MyPageView },
  ],
})

export default router
