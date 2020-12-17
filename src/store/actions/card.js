import axios from "../../axios/axios"
import {FETCH_SUCCESS, FETCH_LOADING, FETCH_FAILED} from '../actionTypes'

export const handlePay24ActionCreator = (sum, id, commission) => dispatch => {
  dispatch({type: FETCH_LOADING})
  axios.post('/pay24', {sum, id, commission})
    .then(({data}) => {
      console.log(data)
      dispatch({type: FETCH_SUCCESS})
    })
    .catch((e) => {
      console.log('pay24', e)
      dispatch({type: FETCH_FAILED})
    })
}

export const handleElsomActionCreator = (sum, id, commission) => dispatch => {
  dispatch({type: FETCH_LOADING})
  axios.post('/elsom', {sum, id, commission})
    .then(({data}) => {
      console.log(data)
      dispatch({type: FETCH_SUCCESS})
    })
    .catch((e) => {
      console.log('elsom', e)
      dispatch({type: FETCH_FAILED})
    })
}

export const handleBalanceActionCreator = (sum, id, commission) => dispatch => {
  dispatch({type: FETCH_LOADING})
  axios.post('/balance', {sum, id, commission})
    .then(({data}) => {
      console.log(data)
      dispatch({type: FETCH_SUCCESS})
    })
    .catch((e) => {
      console.log('balance', e)
      dispatch({type: FETCH_FAILED})
    })
}