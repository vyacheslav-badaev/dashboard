import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Login from '@/components/page/Login'
import NotFound from '@/components/page/NotFound'
import DashboardLayout from '@/components/layout/Dashboard'
import EmptyLayout from '@/components/layout/Empty'
import CalenderOverview from '@/components/pages/Calender/Overview'
import CalenderDetail from '@/components/pages/Calender/Detail'
import StudentsOverview from '@/components/pages/Students/Overview'
import StudentsDetail from '@/components/pages/Students/Detail'
import TeachersOverview from '@/components/pages/Teachers/Overview'
import TeachersDetail from '@/components/pages/Teachers/Detail'
import ServicedeskOverview from '@/components/pages/Servicedesk/Overview'
import ServicedeskDetail from '@/components/pages/Servicedesk/Detail'
import AdminsOverview from '@/components/pages/Admins/Overview'
import AdminsDetail from '@/components/pages/Admins/Detail'
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
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'Demo',
          component: Demo,
          meta: { requiresAuth: true }
        },
        {
          path: '/calender',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'CalenderOverview', component: CalenderOverview, meta: { requiresAuth: true }},
            {path: 'create', name: 'CalenderCreate', component: Demo, meta: { requiresAuth: true }},
            {path: ':id', name: 'CalenderDetails', component: CalenderDetail, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/students',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'StudentsOverview', component: StudentsOverview, meta: { requiresAuth: true }},
            {path: 'create', name: 'StudentsCreate', component: Demo, meta: { requiresAuth: true }},
            {path: ':id', name: 'StudentsDetails', component: StudentsDetail, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/teachers',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'TeachersOverview', component: TeachersOverview, meta: { requiresAuth: true }},
            {path: 'create', name: 'TeachersCreate', component: Demo, meta: { requiresAuth: true }},
            {path: ':id', name: 'TeachersDetails', component: TeachersDetail, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/servicedesk',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'ServicedeskOverview', component: ServicedeskOverview, meta: { requiresAuth: true }},
            {path: 'create', name: 'ServicedeskCreate', component: Demo, meta: { requiresAuth: true }},
            {path: ':id', name: 'ServicedeskDetails', component: ServicedeskDetail, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/admins',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'AdminsOverview', component: AdminsOverview, meta: { requiresAuth: true }},
            {path: 'create', name: 'AdminsCreate', component: Demo, meta: { requiresAuth: true }},
            {path: ':id', name: 'AdminsDetails', component: AdminsDetail, meta: { requiresAuth: true }}
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
