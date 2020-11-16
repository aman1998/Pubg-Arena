import {
  SET_LOBBY, 
  SET_LOBBY_LIST, 
  SET_PLAYERS, 
  SET_LOADING, 
  GET_LOBBIES_FAILED, 
  GET_LOBBIES_LOADING, 
  GET_LOBBIES_SUCCESS,
} from "../actionTypes";

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
  dispatch({ type: GET_LOBBIES_LOADING })
  axios.get('/lobby/rates/')
  // axios.get('/list/')
    .then(response => {
      dispatch(setLobbiesList(response.data))
      dispatch({ type: GET_LOBBIES_SUCCESS })
      // console.log(response.data)
    })
    .catch(error => {
      dispatch({ type: GET_LOBBIES_FAILED })
      console.log(error)
    })
}

export const setLobby = (lobby) => ({
  type: SET_LOBBY,
  lobby
})
