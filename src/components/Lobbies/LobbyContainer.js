import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PubgPhoto from '../../assets/img/pubg.png'
import axios from '../../axios/axios'
import {setPlayers, setLoading} from '../../store/actions/lobbies'
import Timer from '../UI/Timer'

const ENDOPOINT = 'http://195.38.164.24:8080'

const LobbyContainer = (props) => {
  const [password, setPassword] = useState(false)

  const {myProfile, players} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    players: state.lobbies.players,
  }))

  const dispatch = useDispatch()

  const enterGame = () => {
    axios.post('/lobby/users/', {rates: props.id, user: myProfile.pk, balance: myProfile.balance})
      .then((response) => {
        dispatch(setLoading(true))
        // setPassword(true)
      })
      .catch(e => console.log(e))
  }

  const showPass = () => {
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].id === myProfile.pk) {
        setPassword(true)
      }
    }
  }

  return (
    <div className='container wrapper'>
      <section className='lobby'>
        <div className='lobby-left'>
          <img src={PubgPhoto} alt='#' className='avatar'/>
          <div className='lobby-content'>
            <div className='map'>Карта: {props.map}</div>
            <div className='date'>{props.date} {props.time}</div>
            <div className='name'>{props.name}</div>
            <div className='price'>Цена участия: <span>{props.priceGame} сомов</span></div>
            <div className='price'>Цена 1 убийства: <span>{props.priceKill} сомов</span></div>
            {props.date !== '0000-00-00T00:00:00+06:00' ? <Timer date={props.date}/> : ' '}
            <button className='lobby-content__btn btn' onClick={enterGame}>Вступить</button>
            <button className='lobby-content__btn btn' onClick={showPass}>Пароль</button>
          </div>
        </div>
        <div className='lobby-right players-list'>
          <h2 className='title'>Участники</h2>
          {
            props.players ? props.players.map((item, index) => {
              return <div className='player' key={item.id}> {index + 1}. {item.name}</div>
            }) : <div>loading</div>
          }
        </div>
      </section>
      {password === true ?
        <div className='password-block'>
          <div>Ваш код для участия в игре</div>
          <div className='password'>{props.pass}</div>
        </div> : <div>pass is not</div>}
    </div>
  )
}

export default LobbyContainer