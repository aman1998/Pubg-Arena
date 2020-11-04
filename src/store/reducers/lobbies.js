const initialState = {
  list: [],
  success: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOBBIES_LIST':
      return {
        ...state,
        list: action.list,
      }
      case 'GET_LOBBIES_SUCCESS':
      return {
        ...state,
        success: action.success,
      }
    default: return state
  }
}


export default reducer