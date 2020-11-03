const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOBBIES_LIST':
      return {
        ...state,
        list: action.list,
      }
    default: return state
  }
}


export default reducer