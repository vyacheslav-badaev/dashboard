import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Login from '@/components/page/Login'
import NotFound from '@/components/page/NotFound'
import DashboardLayout from '@/components/layout/Dashboard'
import EmptyLayout from '@/components/layout/Empty'
import CalenderOverview from '@/components/pages/Calender/Overview'
import CalenderDetail from '@/components/pages/Calender/Detail'
import ScheduleOverview from '@/components/pages/Schedule/Overview'
import NotificationsOverview from '@/components/pages/Notifications/Overview'
import NotificationsDetail from '@/components/pages/Notifications/Detail'
import RoomsOverview from '@/components/pages/Rooms/Overview'
import RoomsDetail from '@/components/pages/Rooms/Detail'
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
          path: '/schedule',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'ScheduleOverview', component: ScheduleOverview, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/notifications',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'NotificationsOverview', component: NotificationsOverview, meta: { requiresAuth: true }},
            {path: 'new', name: 'NotificationsCreate', component: NotificationsDetail, meta: { requiresAuth: true }},
            {path: ':id', name: 'NotificationsDetails', component: NotificationsDetail, meta: { requiresAuth: true }}
          ]
        },
        {
          path: '/rooms',
          component: EmptyLayout,
          meta: { requiresAuth: true },
          children: [
            {path: '', name: 'RoomsOverview', component: RoomsOverview, meta: { requiresAuth: true }},
            {path: 'new', name: 'RoomsCreate', component: RoomsDetail, meta: { requiresAuth: true }},
            {path: ':id', name: 'RoomsDetails', component: RoomsDetail, meta: { requiresAuth: true }}
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
