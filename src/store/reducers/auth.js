import {
  GET_ALL,
  GET_TOKEN,
  NEW_USER,
} from "../actionTypes";

const initialState = {
  username: 'admin',
  email: 'admin@test.com',
  password: 'adminadmin',
  token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return state
    case GET_TOKEN:
      return state.token
    case NEW_USER:
      return {
        ...state,

        username: action.username,
        email: action.email,
        password: action.password
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
