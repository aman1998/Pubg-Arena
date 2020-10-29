import { combineReducers } from 'redux'
import auth from './auth'
import isLogged from './isLogged'

export default combineReducers({
  auth,
  isLogged
})