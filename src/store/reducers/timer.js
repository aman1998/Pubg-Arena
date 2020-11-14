import {GET_TIME} from '../actionTypes'

const initialState = {
  time: ''
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: action.time
      }
    default: return state
  }
}

export default reducer