import {SET_PHONE, SET_ACTIVATE, SET_REGISTER} from '../actionTypes'

const inititalState = {
  isPhone: false,
  isActivate: false,
  isRegister: false
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        isPhone: true
      }
    case SET_ACTIVATE:
      return {
        ...state,
        isActivate: true
      }
    case SET_REGISTER:
      return {
        ...state,
        isRegister: true
      }
    
    default: return state
  }
}

export default reducer