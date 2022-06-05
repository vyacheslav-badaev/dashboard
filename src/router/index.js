import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Login from '@/components/page/Login'
import NotFound from '@/components/page/NotFound'
import DashboardLayout from '@/components/layout/Dashboard'
import EmptyLayout from '@/components/layout/Empty'
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
      component: DashboardLayout,
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
          component: EmptyLayout,
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.auth.authenticated) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
export default (router)
