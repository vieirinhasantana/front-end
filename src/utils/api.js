import axios from 'axios'
import cookies from 'vue-cookies'

const BASE_URL = location.hostname === 'localhost' ? 'http://localhost:4545/' : 'http://api.lumper.com.br/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.get('token')

export function isToken () {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.get('token')
  return axios.get(BASE_URL + 'users/isToken')
}
