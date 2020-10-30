import {
  GET_ALL,
  GET_EMAIL,
  GET_PASSWORD,
  GET_USERNAME, NEW_USER,
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERNAME
} from "../actionTypes";

const initialState = [
  {
    username: 'Аман',
    email: '',
    password: '',
    token: localStorage.getItem('token')
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return state
    case NEW_USER:
      return [
        ...state,
        action.payload
      ]
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
