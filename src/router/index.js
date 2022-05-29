import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import NotFound from '@/components/pages/NotFound'
import Layout from '@/components/Layout'
import Wrapper from '@/components/layout/Wrapper'
import StudentsOverview from '@/components/pages/Students/Overview'
import Demo from '@/components/Demo'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      component: Layout,
      name: 'Layout',
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'Demo',
          component: Demo,
          meta: { requiresAuth: true }
        },
        {
          path: '/students',
          component: Wrapper,
          name: 'StudentWrapper',
          meta: { requiresAuth: true },
          children: [
            {
              path: '',
              name: 'StudentsOverview',
              component: StudentsOverview,
              meta: { requiresAuth: true }
            },
            {
              path: 'create',
              name: 'StudentsCreate',
              component: Demo,
              meta: { requiresAuth: true }
            },
            {
              path: ':id',
              name: 'StudentsDetails',
              component: Demo,
              meta: { requiresAuth: true }
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { requiresAuth: false }
    }
  ]
})
export default (router)
