import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import LobbyCard from './LobbyCard'

const Event = () => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))
  const [twoDays] = useState([])
  const [done] = useState([])
  const [others] = useState([])

  const lobbySort = (lobby) => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    if(today <= (new Date(lobby)) && tomorrow >= (new Date(lobby)))
      return 'nearly'
    else if(today > (new Date(lobby)))
      return 'done'
    else
      return 'others'
  }

  const setLobbyToState = () => {
    if (lobbies.length) {
      for (let i = 0; i < lobbies.length; i++) {
        const to = lobbySort(lobbies[i].date)
        switch (to) {
          case 'nearly':
            console.log('h')
            twoDays.push(lobbies[i])
            break
          case 'done':
            done.push(lobbies[i])
            break
          case 'others':
            others.push(lobbies[i])
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
          Игра уже началась
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
          Игра уже закончилась
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
    <>
      <h2>Ближайшие</h2>
      <div className='wrapper container'>
        {
          twoDays ? twoDays.map(item => (
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
          )) : <div>loading ...</div>
        }
      </div>
      <h2>Остальные</h2>
      <div className='wrapper container'>
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
          )) : <div>loading ...</div>
        }
      </div>
      <h2>Законченные</h2>
      <div className='wrapper container'>
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
          )) : <div>loading ...</div>
        }
      </div>

    </>
  )
}

export default Event