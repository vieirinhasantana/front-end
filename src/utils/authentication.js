import cookies from 'vue-cookies'
import { sign, statusToken } from './api.js'

export function isLoggedIn () {
  return new Promise((resolve, reject) => {
    var cookiesStatus = false
    if (!cookies.isKey('token') || !cookies.isKey('loggedIn')) {
      if (!cookiesStatus) {
        reject(cookiesStatus)
      }
    } else if (cookies.get('token') !== null || cookies.get('loggedIn') !== null) {
      statusToken()
      .then(result => {
        resolve(result.data.body)
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
  cookies.remove('token')
  cookies.remove('loggedIn')
  return true
}
