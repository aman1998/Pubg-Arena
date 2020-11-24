import {
  GET_PROFILE, 
  GET_TOKEN, 
  SET_PROFILE, 
  SET_TOKEN, 
  IS_LOG, 
  GET_BALANCE,
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_FAILED
} from "../actionTypes";

const initialState = {
  token: localStorage.getItem('token') || false,
  myProfile: {
  },
  balance: '',
  isLog: false,
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        token: localStorage.getItem('token'),
        myProfile: action.payload
      }
    case GET_TOKEN:
      return {
        ...state,
        token: localStorage.getItem('token'),
      }
    case GET_BALANCE:
      return {
        ...state,
        balance: action.balance,
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
    case IS_LOG:
      return {
        ...state,
        isLog: action.isLog,
      }
    case GET_PROFILE_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case GET_PROFILE_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: '',
        },
      }
    default: return state
  }
}

export default reducer
