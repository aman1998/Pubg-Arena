import {
  SET_TOKEN, 
  IS_LOG, 
  SET_PROFILE,
  GET_BALANCE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../actionTypes"

import {logIn, logOut} from "./logInOut"
import axios from "../../axios/axios"
import {hideState, showState} from "./isAuthState"
import {showLogin} from "./modalLogin";

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload
})

export const getBalance = (balance) => ({
  type: GET_BALANCE,
  balance
})

export const fetchProfileActionCreator = () => dispatch => {
  dispatch({ type: GET_PROFILE_LOADING })
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
      // dispatch(notLoading())
      dispatch({ type: GET_PROFILE_SUCCESS})
      dispatch(getBalance(response.data.balance))
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(logOut())
      // dispatch(notLoading())
      dispatch(setToken(''))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}

export const fetchLoginActionCreator = ({phone, password, reg}) => dispatch => {
  dispatch({ type: FETCH_LOADING })
  axios.post('/login/',
    {phone, password}
  )
    .then( response => {
      if( response.data.token !== '') {
        localStorage.setItem('token', `Token ${response.data.token}` )
        dispatch(setToken(`Token ${response.data.token}`))
      } 
      dispatch({ type: FETCH_SUCCESS })
      dispatch(logIn())
      dispatch(showState())
      dispatch(fetchProfileActionCreator({...response.data}))
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
      if(reg) {
        return null
      }
      else {
        dispatch(showLogin())
      }
    })
    .catch(e => {
      dispatch({ type: FETCH_FAILED })
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

export const logoutActionCreator = (token) => dispatch  => {
	axios.post('/logout/', {} ,{
		headers:{
			'Authorization': token
		}
	})
		.then(() => {
			localStorage.removeItem('token')
			dispatch(setToken(null))
			dispatch(logOut())
			dispatch(setProfile({}))
			dispatch(checkIsLog(false))
		})
		.catch(e => console.log(e))
}

export const handlePhoneActionCreator = (body, getPhone, showActivate, showPhone, setError2) => dispatch => {
  dispatch({ type: FETCH_LOADING })
  axios.post('/validate/', body)
    .then(({data}) => {
      if (data.status) {
        dispatch({ type: FETCH_SUCCESS })
        getPhone(body.phone)
        showActivate(true)
        showPhone(false)
      }
      else {
        dispatch({ type: FETCH_FAILED})
        setError2(true)
      }
    })
    .catch(() => {
      dispatch({ type: FETCH_FAILED})
    })
}


export const handleChangeInfoActionCreator = (body, id, token, myProfile, loading, error) => dispatch => {
  loading(true)
  axios.put(`/update-profile/${id}/`, body, {
    headers:{
      'Authorization': token,
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(res => {
    dispatch(setProfile({...myProfile, avatar: res.data.avatar, phone: res.data.phone, name: res.data.name}))
    loading(false)
  })
  .catch(e => {
    loading(false)
    error(true)
    console.log(e)
  })
}