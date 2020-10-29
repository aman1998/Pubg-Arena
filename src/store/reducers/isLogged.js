import {IS_LOGGED, LOG_IN, LOG_OUT} from "../actionTypes";

let initialState = {
  isLogged: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED:
      return {
        ...state
      }
    case LOG_IN:
      return {
        isLogged: true
      }
    case LOG_OUT:
      return {
        isLogged: false
      }
  }
}

export default reducer