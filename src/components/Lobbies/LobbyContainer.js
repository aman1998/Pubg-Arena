import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import PubgPhoto from '../../assets/img/pubg.png'
import axios from '../../axios/axios'
import {setPlayers, setLoading} from '../../store/actions/lobbies'

const ENDOPOINT = 'http://195.38.164.24:8080'

const LobbyContainer = (props) => {
  const { myProfile, players } = useSelector(state => ({
    myProfile: state.profile.myProfile,
    players: state.lobbies.players
  }))

  const dispatch = useDispatch()

  const enterGame = () => {
    axios.post('/lobby/users/', {rates: props.id, user: myProfile.pk})
    .then((response) => {
      dispatch(setLoading(true))
    })
    .catch(e => console.log(e))
  }

  console.log('players', players)

  return (
    <div className='container wrapper'>
      <section className='lobby'>
        <div className='lobby-left'>
          <img src={PubgPhoto} alt='#' className='avatar'/>
          <div className='lobby-content'>
            <div className='map'>Карта: {props.name_mode}</div>
            <div className='date'>{props.date} {props.time}</div>
            <div className='name'>{props.title}</div>
            <div className='price'>Цена участия: <span>{props.priceGame} сомов</span></div>
            <div className='price'>Цена 1 убийства: <span>{props.priceKill} сомов</span></div>
            <button className='lobby-content__btn btn' onClick={enterGame}>Вступить</button>
          </div>
        </div>
        <div className='lobby-right players-list'>
          <h2 className='title'>Участники</h2>
          {
            // lobbies.map(item => (
            //   item.player_list.map(item => (
            //     <div>{item.name}</div>
            //   ))
            // ))
            players ? players.map((item, index) => (
              <div className='player' key={item.id}>{index+1}. {item.name}</div>
            )) : <div>loading</div>
          }
        </div>
      </section>
    </div>
  )
}

export default LobbyContainer