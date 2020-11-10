import axios from 'axios'

export default axios.create({
  defaultUrl: 'http://localhost:8000'
})