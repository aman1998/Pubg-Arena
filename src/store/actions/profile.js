import {SET_TOKEN, IS_LOG, SET_PROFILE} from "../actionTypes"
import {loading, notLoading} from "./isLoading"
import {logIn, logOut} from "./logInOut"
import axios from "../../axios/axios"

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload
})

export const fetchProfileActionCreator = () => dispatch => {
  dispatch(loading())
  const token = localStorage.getItem('token')
  axios.get('/profile/', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then((response) => {
      dispatch(setProfile(response.data))
      dispatch(logIn())
      dispatch(checkIsLog(true))
      dispatch(notLoading())
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(logOut())
    })
}

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})