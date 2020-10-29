import {GET_EMAIL, GET_PASSWORD, GET_USERNAME, SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "../actionTypes";

let initialState = {
  username: 'admin',
  email: 'admin@test.com',
  password: 'adminadmin'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case GET_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case GET_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case SET_USERNAME:
      return {
        ...state,
        password: action.password
      }
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password
      }
  }
}

export default reducer
