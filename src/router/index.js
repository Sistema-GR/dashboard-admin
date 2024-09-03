import { createRouter, createWebHistory } from 'vue-router'

///////////////////////////////////////////////////////////////////////////////
import login from '../views/Auth/Login/index.vue'
import register from '../views/Auth/Register/index.vue'
import forgotpassword from '../views/Auth/ForgotPassword/index.vue'
import changepassword from '../views/Auth/ChangePassword/index.vue'
import insertcode from '../views/Auth/InsertCode/index.vue'
///////////////////////////////////////////////////////////////////////////////
import admin from '../views/Admin/index.vue'
import home from "@/views/Admin/Home/index.vue"
import newcal from '../views/Admin/NewCal/index.vue'
import previousresults from '@/views/Admin/PreviousResults/index.vue'
import info from '@/views/Admin/InfoResource/index.vue'
import inports from "@/views/Admin/Inports/index.vue"
//
import resource from '@/views/Admin/Resource/index.vue'
import newResource from '@/views/Admin/Resource/NewResource/index.vue'
import inprogress from '@/views/Admin/Resource/InProgress/index.vue'
import awaiting from '@/views/Admin/Resource/Awaiting/index.vue'
import reopened from '@/views/Admin/Resource/Reopened/index.vue'
import completed from '@/views/Admin/Resource/Completed/index.vue'
import cancel from '@/views/Admin/Resource/Cancel/index.vue'

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
import rewards from '@/views/AdminPanel/Rewards/index.vue'
///////////////////////////////////////////////////////////////////////////////
import user from '@/views/User/index.vue'
import form from '@/views/User/ResourceForm/index.vue'
import faqs from '@/views/User/Faqs/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: login },
    { path: '/register', name: 'register', component: register },
    { path: '/changepassword', name: 'changepassword', component: changepassword },
    { path: '/forgotpassword', name: 'forgotpassword', component: forgotpassword },
    { path: '/insertcode', name: 'insertcode', component: insertcode },
    {
      path: '/home',
      name: 'home',
      component: admin,
      children: [
        { path: 'overview', name: 'overview', component: home },
        { path: 'newcal', name: 'newcal', component: newcal },
        { path: 'previousresults', name: 'previousresults', component: previousresults },
        { path: 'info', name: 'info', component: info,},
        { path: 'inports', name: 'inports', component: inports }
      ]
    },
    {
      path: '/admin',
      name: 'adminPanel',
      component: adminPanel,
      children: [
        { path: 'results', name: 'results', component: result },
        { path: 'professional', name: 'professional', component: professional },
        { path: 'groups', name: 'groups', component: groups },
        { path: 'steps', name: 'steps', component: steps },
        { path: 'frequency', name: 'frequency', component: frequency },
        { path: 'activities', name: 'activities', component: activities },
        { path: 'service', name: 'service', component: service },
        { path: 'training', name: 'training', component: training },
        { path: 'report', name: 'report', component: report },
        { path: 'rewards', name: 'rewards', component: rewards }
      ]
    },
    { path: '/user', 
      name: 'user', 
      component: user,
      children: [
        { path: 'rewards', name: 'rewards', component: rewards },
        { path: 'form', name: 'form', component: form },
        { path: 'faqs', name: 'faqs', component: faqs },
      ]
    },
    { path: '/resource', 
      name: 'resource', 
      component: resource,
      children: [
        { path: 'new', name: 'newResource', component: newResource },
        { path: 'inprogress', name: 'inprogress', component: inprogress },
        { path: 'awaiting', name: 'awaiting', component: awaiting },
        { path: 'reopened', name: 'reopened', component: reopened },
        { path: 'completed', name: 'completed', component: completed },
        { path: 'canceled', name: 'cancel', component: cancel },
      ]
    },
  ]
})

export default router