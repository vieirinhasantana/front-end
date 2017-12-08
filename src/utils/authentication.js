import cookies from 'vue-cookies'
import { sign } from './api.js'

export function isLoggedIn () {
  if (!cookies.isKey('UniBank-Token') || !cookies.isKey('UniBank-loggedIn')) {
    return false
  } else {
    return true
  }
}

export function LoggedIn (email, password) {
  return new Promise((resolve, reject) => {
    sign(email, password)
    .then(result => {
      resolve(result)
    })
    .catch(err => {
      if (err) {
        reject(err)
      }
    })
  })
}

export function logout () {
  cookies.remove('token')
  cookies.remove('email')
  return true
}
