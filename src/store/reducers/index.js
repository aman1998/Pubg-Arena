import { combineReducers } from 'redux'
import profile from './profile'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'
import lobbies from './lobbies'

export default combineReducers({
  profile,
  isLogged,
  modalRegister,
  modalLogin,
  lobbies
})