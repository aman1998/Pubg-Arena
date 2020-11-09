import {HIDE_STATE, SHOW_STATE} from "../actionTypes";

const isAuthState = (state = false, action) => {
  switch (action.type){
    case SHOW_STATE:
      return state = true
    case HIDE_STATE:
      return state = false
    default:
      return state
  }
}

export default isAuthState