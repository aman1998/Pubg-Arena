import {HIDE_ERROR, SHOW_ERROR} from "../actionTypes";

export const showError = () => ({
  type: SHOW_ERROR
})

export const hideError = () => ({
  type: HIDE_ERROR
})