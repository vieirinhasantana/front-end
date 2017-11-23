import Router from 'vue-router'
import cookies from 'vue-cookies'

var router = new Router({})

export function isLoggedIn () {
  if (!cookies.isKey('token') || !cookies.isKey('email')) {
    return router.push('sign-in')
  }
}

export function logout () {
  cookies.remove('token')
  cookies.remove('email')
  router.push('login')
}
