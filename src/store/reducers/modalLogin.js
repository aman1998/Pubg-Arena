import {SHOW_LOGIN_MODAL} from "../actionTypes";

const modalLogin = (state = false, action) => {
  switch (action.type){
    case SHOW_LOGIN_MODAL:
      return state = !state
    default:
      return state
  }
}

export default modalLogin