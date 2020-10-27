const initilalState = {
  name: 'aman',
  surname: '',
  phone: ''
}

const reducer = (state = initilalState, action) => {
  switch (action.type) {
    case 'GET_NAME':
      return {
        ...state,
        login: action.name,
      }
    case 'GET_SURNAME':
      return {
        ...state,
        login: action.surname,
      }
    case 'GET_PHONE':
      return {
        ...state,
        login: action.phone,
      }
    default:
      return state
  }
}

export default reducer
