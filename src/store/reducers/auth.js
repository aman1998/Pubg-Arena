import {
  GET_ALL,
  GET_TOKEN,
  NEW_USER,
  GET_PROFILE
} from "../actionTypes";

const initialState = {
  username: 'admin',
  email: 'admin@test.com',
  password: 'adminadmin',
  token: localStorage.getItem('token'),
  profile: {
    name: 'Aman',
    surname: 'Esen'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        profile: {
          ...state.profile
        }
      }
    case GET_TOKEN:
      return state.token
    case NEW_USER:
      return {
        ...state,

        username: action.username,
        email: action.email,
        password: action.password
      }
    case GET_PROFILE:
    return {
      ...state,
      profile: action.payload
    }
    default:
      return {
        ...state,
        profile: {
          ...state.profile
        }
      }
  }
}

export default reducer
