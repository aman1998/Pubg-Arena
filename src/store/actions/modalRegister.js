import {SHOW_REGISTER_MODAL} from "../actionTypes";
import axios from "../../axios/axios";
import {fetchLoginActionCreator} from "./profile";

export const showRegister = () => ({
  type: SHOW_REGISTER_MODAL
})

export const activateActionCreator = (body,showActivate, showReg, setError) => () => {
  axios.post('/verify/', body)
    .then(({data}) => {
      if(data.status) {
        console.log(data)
        showActivate(false)
        showReg(true)
      }
      else {
        console.log(data)
        setError(true)
      }
    })
    .catch(e => console.log(e))
}

export const registerActionCreator = ({name, pubg_id, phone, password}, showRegistered) => dispatch => {
  dispatch(fetchLoginActionCreator({phone, password}))
  axios.post('/register/', {name, pubg_id, phone, password})
    .then(() => {
      dispatch(fetchLoginActionCreator({phone, password}))
      showRegistered(true)
    })
    .catch(e => console.log(e))
}