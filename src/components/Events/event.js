import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import LobbyCard from './LobbyCard'
import TournamentSlider from "../../container/TournamentSlider";

const Event = () => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))
  const [toDay] = useState([])
  const [immediate] = useState([])
  const [done] = useState([])
  const [others] = useState([])

  const lobbySort = (lobby) => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 3)
    if(today > (new Date(lobby)))
      return 'done'
    else if (today.getDate() === (new Date(lobby)).getDate() &&
      today.getMonth() === (new Date(lobby)).getMonth() &&
      today.getFullYear() === (new Date(lobby)).getFullYear())
      return 'today'
    else if (today < (new Date(lobby)) && tomorrow >= (new Date(lobby)))
      return 'immediate'
    else
      return 'others'
  }

  const setLobbyToState = () => {
    if (lobbies.length) {
      for (let i = 0; i < lobbies.length; i++) {
        const to = lobbySort(lobbies[i].date)
        switch (to) {
          case 'today':
            toDay.push(lobbies[i])
            break
          case 'others':
            others.push(lobbies[i])
            break
          case 'immediate':
            immediate.push(lobbies[i])
            break
          case 'done':
            done.push(lobbies[i])
            break
          default:
            others.push(lobbies[i])
        }
      }
    }
  }

  const checkIsTime = (time, id) => {
    const countdownDateFormat = `${time}`.split("+")[0]
    const countdownDate = new Date(countdownDateFormat).getTime()
    const now = new Date().getTime()
    const distance = countdownDate - now
    if (distance < 0 && distance > -1800000) {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
          style={{background: '#F2C00F'}}
        >
          Игра началась
        </NavLink>
      )
    } else if (distance < -1800000) {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
          style={{background: ' rgba(45, 144, 105, 0.4)'}}
        >
          Игра окончена
        </NavLink>
      )
    } else {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
        >
          Подробнее
        </NavLink>
      )
    }
  }

  useEffect(() => {
    setLobbyToState()
  }, [lobbies])

  return (
    <div className='container'>
      <h2 className='event-title'>Турниры на сегодня</h2>
      <div className='wrapper'>
        {
          toDay.length !== 0 ? <TournamentSlider
            list={toDay && toDay}
          /> : <div className='tournament-doesnt'>На сегодня нету турниров</div>
        }
      </div>
      <h2 className='event-title'>Турниры на ближайшие дни</h2>
      <div className='wrapper'>
        {

          immediate.length !== 0 ? <TournamentSlider
            list={immediate && immediate}
          /> : <div className='tournament-doesnt'>Нету ближайших турниров</div>
        }
      </div>
      <h2 className='event-title'>Все</h2>
      <div className='wrapper'>
        {
          toDay ? toDay.map(item => (
            <LobbyCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              map={item.map}
              date={item.date}
              price={item.price}
              kill_award={item.kill_award}
              checkIsTime={checkIsTime}
            />
          )) : null
        }
        {
          immediate ? immediate.map(item => (
            <LobbyCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              map={item.map}
              date={item.date}
              price={item.price}
              kill_award={item.kill_award}
              checkIsTime={checkIsTime}
            />
          )) : null
        }
        {
          others ? others.map(item => (
            <LobbyCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              map={item.map}
              date={item.date}
              price={item.price}
              kill_award={item.kill_award}
              checkIsTime={checkIsTime}
            />
          )) : null
        }
      </div>
      <h2 className='event-title more'>Законченные</h2>
      <div className='wrapper'>
      {
        done ? done.map(item => (
          <LobbyCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            map={item.map}
            date={item.date}
            price={item.price}
            kill_award={item.kill_award}
            checkIsTime={checkIsTime}
          />
        )) : null
      }
      </div>
    </div>
  )
}

export default Event