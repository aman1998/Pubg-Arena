import {SHOW_REGISTER_MODAL} from "../actionTypes";

const modalReducer = (state = false, action) => {
  switch (action.type){
    case SHOW_REGISTER_MODAL:
      return state = !state
    default:
      return state
  }
}

export default modalReducer