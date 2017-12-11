import axios from 'axios'
import cookies from 'vue-cookies'

const BASE_URL = location.hostname === 'localhost' ? 'http://localhost:7020/' : 'http://35.197.122.215/'

export function sign (email, password) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(email + ':' + password)
  return axios.post(BASE_URL + 'v1/authWebServer')
}

export function statusToken () {
  axios.defaults.headers.common['UniBank-Token'] = 'Bearer ' + cookies.get('UniBank-Token')
  return axios.get(BASE_URL + 'v1/authWebServer/token')
}
