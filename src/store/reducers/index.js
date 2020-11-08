import { combineReducers } from 'redux'
import profile from './profile'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'
import lobbies from './lobbies'
import isLoading from './isLoading'
import error from './error'

export default combineReducers({
  profile,
  isLogged,
  modalRegister,
  modalLogin,
  lobbies,
  isLoading,
  error
})