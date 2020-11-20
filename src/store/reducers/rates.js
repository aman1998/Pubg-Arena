import {ALL_RATES} from "../actionTypes";

const initial = [
  {id: 0, name: 'erlan', kills: 2},
  {id: 1, name: 'er', kills: 40},
  {id: 2, name: 'bil', kills: 20},
  {id: 3, name: 'hell', kills: 22},
  {id: 4, name: 'pis', kills: 30},
  {id: 5, name: 'carr', kills: 11},
  {id: 6, name: 'ball', kills: 0},
  {id: 7, name: 'inst', kills: 60},
  {id: 8, name: 'twitt', kills: 20},
  {id: 9, name: 'comm', kills: 8},
  {id: 10, name: 'tour', kills: 9},
  {id: 11, name: 'aman', kills: 10},
  {id: 12, name: 'ilyas', kills: 30},
  {id: 13, name: 'chin', kills: 14},
  {id: 14, name: 'ulik', kills: 18},
  {id: 15, name: 'has', kills: 17},
  {id: 16, name: 'hamburg', kills: 19},
  {id: 17, name: 'hell', kills: 10},
  {id: 18, name: 'carrot', kills: 7},
  {id: 19, name: 'op', kills: 7},
  {id: 20, name: 'onepice', kills: 2},
  {id: 21, name: 'cant', kills: 6},
  {id: 22, name: 'luffy', kills: 5},
  {id: 23, name: 'mijark', kills: 24},
  {id: 24, name: 'dragon', kills: 26},
  {id: 25, name: 'chopp', kills: 12},
  {id: 26, name: 'isp', kills: 20},
  {id: 27, name: 'lufytaro', kills: 27}
]

const rates = (state = initial, action) => {
  switch (action.type) {
    case ALL_RATES:
      return state
    default:
      return state
  }
}

export default rates