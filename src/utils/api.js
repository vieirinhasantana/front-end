import axios from 'axios'
import cookies from 'vue-cookies'

const BASE_URL = location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'http://35.197.122.215'

export function sign (email, password) {
  axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(email + ':' + password)
  return axios.post(BASE_URL + '/auth')
}

export function statusToken () {
  axios.defaults.headers.common['token'] = cookies.get('token')
  return axios.get(BASE_URL + '/auth')
}

export function insertNewBug (data) {
  var dataJson = JSON.parse(data)
  return axios.post(BASE_URL + '/bug', {
    Title: dataJson.Title,
    Severity: dataJson.Severity,
    Description: dataJson.Description,
    Email: dataJson.Email,
    Status: dataJson.Status,
    Image: dataJson.Image
  })
}

export function getBug (objectId) {
  if (objectId == null) {
    return axios.get(BASE_URL + '/bug')
  } else {
    axios.defaults.headers.common['idBug'] = objectId
    return axios.get(BASE_URL + '/bug/one')
  }
}

export function updateBug (objectId) {
  axios.defaults.headers.common['idBug'] = objectId
  return axios.put(BASE_URL + '/bug')
}
