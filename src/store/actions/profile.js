import {GET_PROFILE, SET_TOKEN, IS_LOG} from "../actionTypes";

export const getMyProfile = (myProfile) => ({
  type: GET_PROFILE,
  myProfile,
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})