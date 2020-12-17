import {FETCH_SUCCESS, FETCH_LOADING, FETCH_FAILED} from '../actionTypes'

const initialState = {
  post: {
    loading: false,
    success: false,
    failed: false
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
        },
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case FETCH_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    default: return state
  }
}

export default reducer