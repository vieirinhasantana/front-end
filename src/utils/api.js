import axios from 'axios'

const BASE_URL = location.hostname === 'localhost' ? 'http://35.197.122.215/' : 'http://api:7020/'
export function sign (email, password) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(email + ':' + password)
  return axios.post(BASE_URL + 'user/sign')
}
