import { combineReducers } from 'redux'
import auth from './auth'
import auth2 from './auth2'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'

export default combineReducers({
  auth,
  auth2,
  isLogged,
  modalRegister,
  modalLogin
})