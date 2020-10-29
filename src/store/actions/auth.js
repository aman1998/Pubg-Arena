import {GET_EMAIL, GET_PASSWORD, GET_USERNAME, SET_USERNAME} from "../actionTypes";

export const getUsername = () => ({
  type: GET_USERNAME
})

export const getPassword = () => ({
  type: GET_PASSWORD
})

export const getEmail = () => ({
  type: GET_EMAIL
})

export const setUsername = () => ({
  type: SET_USERNAME
})