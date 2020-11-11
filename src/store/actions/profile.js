import {SET_TOKEN, IS_LOG, SET_PROFILE} from "../actionTypes"
import {loading, notLoading} from "./isLoading"
import {logIn, logOut} from "./logInOut"
import axios from "../../axios/axios"
import {hideState, showState} from "./isAuthState";

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

export const fetchLoginActionCreator = (body) => dispatch => {
  axios.post('/login/',
    body
  )
    .then( response => {
      localStorage.setItem('token', `Token ${response.data.token}` )
      dispatch(setToken(`Token ${response.data.token}`))
      dispatch(logIn())
      dispatch(showState())
      dispatch(fetchProfileActionCreator({...response.data}))
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
    })
    .catch(e => {
      dispatch(showState())
      dispatch(logOut())
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
      console.log(e)
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