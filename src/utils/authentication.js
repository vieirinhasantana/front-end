import cookies from 'vue-cookies'
import { sign, statusToken } from './api.js'

export function isLoggedIn () {
  return new Promise((resolve, reject) => {
    var cookiesStatus = false
    if (!cookies.isKey('UniBank-Token') || !cookies.isKey('UniBank-loggedIn')) {
      if (!cookiesStatus) {
        reject(cookiesStatus)
      }
    } else if (cookies.get('UniBank-Token') !== null || cookies.get('UniBank-loggedIn') !== null) {
      statusToken()
      .then(result => {
        resolve(result.data.body.StatusToken)
      })
      .catch(err => {
        if (err) {
          reject(err)
        }
      })
    } else {
      if (!cookiesStatus) {
        reject(cookiesStatus)
      }
    }
  })
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
  cookies.remove('UniBank-Token')
  cookies.remove('UniBank-loggedIn')
  return true
}
