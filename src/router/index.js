import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Auth/login.vue'
import overview from '../views/Admin/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
  ]
})

export default router
