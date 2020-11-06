import {GET_PROFILE, GET_TOKEN, SET_PROFILE, SET_TOKEN} from "../actionTypes";
import {act} from "@testing-library/react";

const initialState = {
  token: localStorage.getItem('token'),
  myProfile: {
    favoritesList: [],
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        token: localStorage.getItem('token'),
        myProfile: action.myProfile
      }
    case GET_TOKEN:
      return {
        ...state,
        token: localStorage.getItem('token'),
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case GET_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile,
      }
    default: return state
  }
}

export default reducer
