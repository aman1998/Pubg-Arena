import axios from "../../axios/axios";
import {SET_RATINGS} from "../actionTypes";

let data = []

export const setRatingsCreator = () => dispatch => {
  axios.get('/lobby/users/')
    .then((response) => {
      data = [...response.data]
      sortFucn(data)
    })
    .then(() => {
      dispatch(setRating(data))
    })
    .catch((e) => {
      console.log(e.message)
    })
}

const sortFucn = (users) => {
  users.sort((a, b) => {
    return b.total_kills - a.total_kills
  })
}

export const setRating = (payload) => ({
  type: SET_RATINGS,
  payload: payload
})

