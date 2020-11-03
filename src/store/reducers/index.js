import { combineReducers } from 'redux'
import auth from './auth'
import profile from './profile'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'
import lobbies from './lobbies'

export default combineReducers({
  auth,
  profile,
  isLogged,
  modalRegister,
  modalLogin,
  lobbies
})