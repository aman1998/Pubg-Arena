import {SET_LOBBY, SET_LOBBY_LIST} from "../actionTypes";
import axios from "../../axios/axios";

export const setLobbiesList = (list) => ({
  type: SET_LOBBY_LIST,
  list
})

export const fetchLobbiesActionCreator = () => dispatch => {
  axios.get('/lobby/rates/')
  // axios.get('/list/')
    .then(response => {
      dispatch(setLobbiesList(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const setCurrent = (current) => ({
  type: SET_LOBBY,
  current
})
