import { combineReducers } from 'redux'
import profile from './profile'
import isLogged from './isLogged'
import modalRegister from './modalRegister'
import modalLogin from './modalLogin'
import lobbies from './lobbies'
import register from './register'
import isLoading from './isLoading'
import isAuthState from './isAuthState'

export default combineReducers({
  profile,
  isLogged,
  modalRegister,
  modalLogin,
  lobbies,
  isLoading,
  register,
  isAuthState
})