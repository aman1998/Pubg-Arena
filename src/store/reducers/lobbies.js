import {SET_LOBBY, SET_LOBBY_LIST} from "../actionTypes";

const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOBBY_LIST:
      return {
        ...state,
        list: action.list
      }
    case SET_LOBBY:
      return {
        ...state,
        list: [
          ...state.list
        ],
        current: action.current
      }
    default: return state
  }
}


export default reducer