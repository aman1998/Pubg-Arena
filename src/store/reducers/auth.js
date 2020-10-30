import {
  GET_ALL,
  GET_TOKEN,
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERNAME
} from "../actionTypes";

const initialState = {
  username: 'admin',
  email: 'admin@test.com',
  password: 'adminadmin',
  token: 'akkahahha'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return state
    case GET_TOKEN:
      return state.token
    case SET_USERNAME:
      return {
        ...state,
        password: action.payload
      }
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
