import cookies from 'vue-cookies'
import { sign } from './api.js'

export function isLoggedIn () {
  if (!cookies.isKey('token') || !cookies.isKey('email')) {
    return false
  } else {
    return true
  }
}

export function LoggedIn (email, password) {
  return new Promise((resolve, reject) => {
    sign(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

export function logout () {
  cookies.remove('token')
  cookies.remove('email')
  return true
}
