import { combineReducers } from 'redux'
import auth from './auth'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'

export default combineReducers({
  auth,
  isLogged,
  modalRegister,
  modalLogin
})