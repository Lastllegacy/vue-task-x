import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/pages/Auth.vue'
import Analytics from '@/pages/Analytics.vue'


const routes = [
  {
    path: '/',
    component: Auth
  },
  {
    path: '/analytics',
    component: Analytics
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
