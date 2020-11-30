import {
  FETCH_FAILED,
  FETCH_LOADING,
  FETCH_SUCCESS
} from "../actionTypes";

const initialState = {
  post: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case FETCH_FAILED:
      return {
        ...state,
        post: {
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
