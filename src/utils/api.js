import axios from 'axios'

const BASE_URL = location.hostname === 'localhost' ? 'http://localhost:7020/' : 'http://35.197.122.215/'
export function sign (email, password) {
  return axios.post(BASE_URL + 'user/sign')
}
