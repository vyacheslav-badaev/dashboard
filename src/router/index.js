import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Layout from '@/components/Layout'
import NotFound from '@/components/pages/NotFound'
import Demo from '@/components/Demo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Demo',
          component: Demo
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
