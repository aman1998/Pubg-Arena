import {SET_LOBBY, SET_LOBBY_LIST, SET_PLAYERS, SET_LOADING} from "../actionTypes";
import axios from "../../axios/axios";

export const setLobbiesList = (list) => ({
  type: SET_LOBBY_LIST,
  list
})

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  players
})

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
})

export const fetchLobbiesActionCreator = () => dispatch => {
  axios.get('/lobby/rates/')
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
