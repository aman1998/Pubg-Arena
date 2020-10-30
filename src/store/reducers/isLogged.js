import {IS_LOGGED, LOG_IN, LOG_OUT} from "../actionTypes";

const reducer = (state = false, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return state
    case LOG_IN:
      return state = true
    case LOG_OUT:
      return state = false
    default:
      return state
  }
}

export default reducer