import {SHOW_REGISTER_MODAL} from "../actionTypes";
import axios from "../../axios/axios";
import {fetchLoginActionCreator} from "./profile";

import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../actionTypes"

export const showRegister = () => ({
  type: SHOW_REGISTER_MODAL
})

export const activateActionCreator = (body,showActivate, showReg, setError) => dispatch => {
  dispatch({ type: FETCH_LOADING })
  axios.post('/verify/', body)
    .then(({data}) => {
      if(data.status) {
        dispatch({ type: FETCH_SUCCESS})
        console.log(data)
        showActivate(false)
        showReg(true)
      }
      else {
        console.log(data)
        setError(true)
        dispatch({ type: FETCH_FAILED})
      }
    })
    .catch(e => {
      setError(true)
      dispatch({ type: FETCH_FAILED})
    })
}

export const registerActionCreator = ({name, pubg_id, phone, password}, showRegistered) => dispatch => {
  dispatch({ type: FETCH_LOADING })
  axios.post('/register/', {name, pubg_id, phone, password})
    .then(response => {
      console.log(response)
      dispatch({ type: FETCH_SUCCESS })
      dispatch(fetchLoginActionCreator({phone, password}))
      showRegistered(true)
    })
    .catch(e => {
      dispatch({ type: FETCH_FAILED })
    })
}