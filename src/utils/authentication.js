import Router from 'vue-router'
import cookies from 'vue-cookies'

export function logout () {
  cookies.remove('token')
  cookies.remove('email')
  router.push('login')
}