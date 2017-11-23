import cookies from 'vue-cookies'

export function isLoggedIn () {
  if (!cookies.isKey('token') || !cookies.isKey('email')) {
    return false
  } else {
    return true
  }
}

export function logout () {
  cookies.remove('token')
  cookies.remove('email')
  return true
}
