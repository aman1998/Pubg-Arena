import {ALL_RATES, SET_RATINGS} from "../actionTypes"

const initial = []

const rates = (state = initial, action) => {
  switch (action.type) {
    case ALL_RATES:
      return state
    case SET_RATINGS:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state
  }
}

export default rates