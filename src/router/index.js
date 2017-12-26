import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import ErrorRegistering from '@/components/ErrorRegistering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/registerBug'
    },
    {
      path: '/registerBug',
      name: 'ErrorRegistering',
      component: ErrorRegistering
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/sign-in',
      name: 'Login',
      component: Login
    }
  ]
})
