import {HIDE_ERROR, SHOW_ERROR} from "../actionTypes";

const error = (state = false, action) => {
  switch (action.type){
    case SHOW_ERROR:
      return state = true
    case HIDE_ERROR:
      return state = false
    default:
      return state
  }
}

export default error