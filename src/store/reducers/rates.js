import {ALL_RATES, SET_RATINGS, GET_RATES_LOADING, GET_RATES_SUCCESS, GET_RATES_FAILED} from "../actionTypes"

const initialState = {
  users: [],
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
}

const rates = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RATES:
      return state
    case SET_RATINGS:
      return {
        ...state,
        users: action.users,
      }
      case GET_RATES_LOADING:
        return {
          ...state,
          get: {
            success: false,
            loading: true,
            failed: false,
            error: '',
          },
        }
      case GET_RATES_SUCCESS:
        return {
          ...state,
          get: {
            success: true,
            loading: false,
            failed: false,
            error: '',
          },
        }
      case GET_RATES_FAILED:
        return {
          ...state,
          get: {
            success: false,
            loading: false,
            failed: true,
            error: '',
          },
        }
    default:
      return state
  }
}

export default rates