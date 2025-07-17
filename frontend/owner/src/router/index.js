import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AttendanceView from '../views/AttendanceView.vue'
import WorktimeView from '../views/WorktimeView.vue'
import SalaryView from '../views/SalaryView.vue'
import MyPageView from '../views/MyPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/owner/attendance' },
    { path: '/owner/attendance', name: 'attendance', component: AttendanceView },
    { path: '/owner/worktime', name: 'worktime', component: WorktimeView },
    { path: '/owner/salary', name: 'salary', component: SalaryView },
    { path: '/owner/mypage', name: 'mypage', component: MyPageView },
    { path: '/owner/home', name: 'home', component: HomeView },
  ],
})

export default router
