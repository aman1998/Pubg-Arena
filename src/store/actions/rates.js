import axios from "../../axios/axios";
import {SET_RATINGS, GET_RATES_FAILED, GET_RATES_LOADING, GET_RATES_SUCCESS} from "../actionTypes";

let data = []

export const setRatingsCreator = () => dispatch => {
  dispatch({type: GET_RATES_LOADING})
  axios.get('/lobby/users/')
    .then((response) => {
      data = [...response.data]
      sortFucn(data)
    })
    .then(() => {
      dispatch({type: GET_RATES_SUCCESS})
      dispatch(setRating(data))
    })
    .catch((e) => {
      dispatch({type: GET_RATES_FAILED})
      console.log(e.message)
    })
}

const sortFucn = (users) => {
  users.sort((a, b) => {
    return b.total_kills - a.total_kills
  })
}

export const setRating = (users) => ({
  type: SET_RATINGS,
  users
})

