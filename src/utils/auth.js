import Router from 'vue-router'
import cookies from 'vue-cookies'

var router = new Router({})

export function isLoggedIn () {
  if (!cookies.isKey('token') || !cookies.isKey('loggedIn')) {
    return router.push('sign-in')
  }
}

export function logout () {
  cookies.remove('token')
  cookies.remove('loggedIn')
  router.push('login')
}
