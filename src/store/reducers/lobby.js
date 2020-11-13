import {SET_LOBBY} from "../actionTypes";

const initialState = {
  lobby: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOBBY:
      return {
        ...state,
        lobby: action.lobby
      }
    default: return state
  }
}


export default reducer