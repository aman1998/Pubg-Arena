import {SET_LANGUAGE} from "../actionTypes";

const initialState = {
  language: localStorage.getItem('i18nextLng') || 'ru'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default: return state
  }
}


export default reducer