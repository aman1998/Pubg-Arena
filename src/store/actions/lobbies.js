import {SET_LOBBY, SET_LOBBY_LIST} from "../actionTypes";
import axios from "../../axios/axios";

export const setLobbiesList = (list) => ({
  type: SET_LOBBY_LIST,
  list
})

export const fetchLobbiesActionCreator = () => {
  return async dispatch => {
    const response = await axios.get('/lobby/rates/')
    dispatch(setLobbiesList(response.data))
  }
}

export const setCurrent = (current) => ({
  type: SET_LOBBY,
  current
})
