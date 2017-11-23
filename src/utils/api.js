import axios from 'axios'

const BASE_URL = location.hostname === 'localhost' ? 'http://api:7020/' : 'http://api:7020/'
export function sign (email, password) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(email + ':' + password)
  return axios.post(BASE_URL + 'user/sign')
}
