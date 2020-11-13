import {SET_LOBBY, SET_LOBBY_LIST, SET_PLAYERS, SET_LOADING} from "../actionTypes";

const initialState = {
  list: [],
  players: [],
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOBBY_LIST:
      return {
        ...state,
        list: action.list
      }
    case SET_PLAYERS:
      return {
        ...state,
        players: action.players
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
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