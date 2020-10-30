import {IS_LOGGED, LOG_IN, LOG_OUT} from "../actionTypes";

export const getIsLogged = () => ({
  type: IS_LOGGED
})
export const logIn = () => ({
  type: LOG_IN
})
export const logOut = () => ({
  type: LOG_OUT
})

