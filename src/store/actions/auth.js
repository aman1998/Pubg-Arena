import {GET_ALL, GET_EMAIL, GET_PASSWORD, GET_USERNAME, SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "../actionTypes";

export const getUsername = () => ({
  type: GET_USERNAME
})

export const getPassword = () => ({
  type: GET_PASSWORD
})

export const getEmail = () => ({
  type: GET_EMAIL
})

export const getAll = () => ({
  type: GET_ALL
})

export const setUsername = (name) => ({
  type: SET_USERNAME,
  payload: name
})

export const setPassword = (pass) => ({
  type: SET_PASSWORD,
  payload: pass
})

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email
})