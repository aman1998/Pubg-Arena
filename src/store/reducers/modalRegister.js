import {SHOW_MODAL} from "../actionTypes"

const modalReducer = (state = false, action) => {
  switch (action.type){
    case SHOW_MODAL:
      return state = !state
    default:
      return state
  }
}

export default modalReducer