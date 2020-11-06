import {GET_PROFILE, SET_TOKEN} from "../actionTypes";

export const getMyProfile = (myProfile) => ({
  type: GET_PROFILE,
  myProfile,
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})