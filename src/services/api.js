import axios from 'axios'
const api = axios.create({
  baseURL: 'https://wizard-world-api.herokuapp.com/'
})
export default api
