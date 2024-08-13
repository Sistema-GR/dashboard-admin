import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Auth/login.vue'
///////////////////////////////////////////////////////////////////////////////
import admin from '../views/Admin/index.vue'
import newcal from '../views/Admin/NewCal/index.vue'
import overview from "@/views/Admin/Overview/index.vue";
import inports from "@/views/Admin/Inports/index.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component : overview
        },
        {
          path: 'newcal',
          name: 'newcal',
          component : newcal
        },
        {
          path: 'inports',
          name: 'inports',
          component : inports
        }
      ]
    },
  ]
})

export default router
