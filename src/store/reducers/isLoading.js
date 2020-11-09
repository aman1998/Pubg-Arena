import {IS_LOADING, LOADING, NOT_LOADING} from "../actionTypes";

const reducer = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return state
    case LOADING:
      return state = true
    case NOT_LOADING:
      return state = false
    default:
      return state
  }
}

export default reducer