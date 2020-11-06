import {IS_LOADING, LOADING, NOT_LOADING} from "../actionTypes";

export const isLoading = () => ({
  type: IS_LOADING
})

export const loading = () => ({
  type: LOADING
})

export const notLoading = () => ({
  type: NOT_LOADING
})