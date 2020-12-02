import { SET_LOBBY_LIST, SET_PLAYERS, SET_LOADING, GET_LOBBIES_SUCCESS, GET_LOBBIES_FAILED, GET_LOBBIES_LOADING, IS_PLAYED } from "../actionTypes";

const initialState = {
  list: [],
  players: [],
  isLoading: false,
  isPlayed: true,
  get: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  }
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
    case IS_PLAYED:
      return {
        ...state,
        isPlayed: action.isPlayed
      }
      case GET_LOBBIES_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case GET_LOBBIES_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case GET_LOBBIES_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    // case CHANGE_FIELD:
    // return {
    //   ...state,
    //   [action.formName]: {
    //     ...state[action.formName],
    //     [action.fieldName]: action.value,
    //   },
    // }
    default: return state
  }
}


export default reducer