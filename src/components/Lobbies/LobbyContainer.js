import React from 'react'
import { useSelector} from 'react-redux'
import PubgPhoto from '../../assets/img/pubg.png'
import axios from '../../axios/axios'

const LobbyContainer = (props) => {
  const { myProfile, lobbies } = useSelector(state => ({
    myProfile: state.profile.myProfile,
    lobbies: state.lobbies.list
  }))

  const enterGame = () => {
    axios.post('/lobby/users/', {rates: props.id, user: myProfile.pk})
    .then((response) => {
      console.log(response)
    })
    .catch(e => console.log(e))
  }

  return (
    <div className='container'>
      <section className='lobby'>
        <img src={PubgPhoto} alt='#' className='avatar'/>
        <div className='lobby-content'>
          <div className='map'>Карта: {props.name_mode}</div>
          <div className='date'>{props.date} {props.time}</div>
          <div className='name'>{props.title}</div>
          <div className='price'>Цена участия: {props.priceGame} сомов</div>
          <div className='price'>Цена 1 убийства: {props.priceKill} сомов</div>
          <button className='lobby-content__btn btn' onClick={enterGame}>Вступить</button>
        </div>
        <div className='players-list'>
          {
            lobbies.map(item => (
              item.player_list.map(item => (
                <div>{item.name}</div>
              ))
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default LobbyContainer