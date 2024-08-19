import { createRouter, createWebHistory } from 'vue-router'
///////////////////////////////////////////////////////////////////////////////
import login from '../views/Auth/Login/login.vue'
///////////////////////////////////////////////////////////////////////////////
import admin from '../views/Admin/index.vue'
import home from "@/views/Admin/Home/index.vue";
import newcal from '../views/Admin/NewCal/index.vue'
import inports from "@/views/Admin/Inports/index.vue";
///////////////////////////////////////////////////////////////////////////////
import adminPanel from '@/views/AdminPanel/index.vue'
import result from '@/views/AdminPanel/Results/index.vue'
import professional from '@/views/AdminPanel/Professional/index.vue'
import steps from '@/views/AdminPanel/Steps/index.vue'
import frequency from '@/views/AdminPanel/Frequency/index.vue'
import activities from '@/views/AdminPanel/Activities/index.vue'
import service from '@/views/AdminPanel/Service/index.vue'
import training from '@/views/AdminPanel/Training/index.vue'
import report from '@/views/AdminPanel/Report/index.vue'
import groups from '@/views/AdminPanel/Groups/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: admin,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component : home
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
    {
      path: '/admin',
      name: 'adminPanel',
      component: adminPanel,
      children: [
        {
          path: 'results',
          name: 'results',
          component : result
        },
        {
          path: 'professional',
          name: 'professional',
          component : professional
        },
        {
          path: 'groups',
          name: 'groups',
          component : groups
        },
        {
          path: 'steps',
          name: 'steps',
          component : steps
        },
        {
          path: 'frequency',
          name: 'frequency',
          component : frequency
        },
        {
          path: 'activities',
          name: 'activities',
          component : activities
        },
        {
          path: 'service',
          name: 'service',
          component : service
        },
        {
          path: 'training',
          name: 'training',
          component : training
        },
        {
          path: 'report',
          name: 'report',
          component : report
        },
      ]
    },
  ]
})

export default router
