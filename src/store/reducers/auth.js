import {GET_NAME, GET_PHONE, GET_SURNAME, IS_LOGGED} from "../actionTypes";

const initialState = {
  isLoggedIn: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        login: action.name,
      }
    case GET_SURNAME:
      return {
        ...state,
        login: action.surname,
      }
    case GET_PHONE:
      return {
        ...state,
        login: action.phone,
      }
    case IS_LOGGED:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer
