import axios from 'axios'
//first to prod
//second to test back
export default axios.create({
  // baseURL: 'http://195.38.164.24:8080'
  baseURL: 'http://193.124.206.13:8080'
})