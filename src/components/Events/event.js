import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import LobbyCard from './LobbyCard'
import TournamentSlider from "../../container/TournamentSlider"

import {useTranslation} from 'react-i18next'
import useWindowDimensions from "../Hooks/useWindowDimentions"
import TournamentSlide from "./TournamentSlide";

const Event = () => {
  const {t} = useTranslation()
  const {width} = useWindowDimensions()

  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))
  const [toDay] = useState([])
  const [tomorrow] = useState([])
  const [afterTomorrow] = useState([])
  const [done] = useState([])
  const [others] = useState([])

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
          {t('Events.btns.3')}
        </NavLink>
      )
    } else if (distance < -1800000) {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
          style={{background: '#FF0000', boxShadow: 'none', color: '#ffffff'}}
        >
          {t('Events.btns.4')}
        </NavLink>
      )
    } else {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
        >
          {t('Events.btns.2')}
        </NavLink>
      )
    }
  }


  useEffect(() => {
    const lobbySort = (lobby) => {
      const today = new Date()
      const tomorrow = new Date()
      tomorrow.setDate(today.getDate() + 1)
      const afterTomorrow = new Date()
      afterTomorrow.setDate(today.getDate() + 2)
      if (today > (new Date(lobby)))
        return 'done'
      else if (today.getDate() === (new Date(lobby)).getDate() &&
        today.getMonth() === (new Date(lobby)).getMonth() &&
        today.getFullYear() === (new Date(lobby)).getFullYear())
        return 'today'
      else if (today.getDate() < (new Date(lobby)).getDate() && tomorrow.getDate() >= (new Date(lobby)).getDate())
        return 'tomorrow'
      else if (tomorrow.getDate() < (new Date(lobby)).getDate() && afterTomorrow.getDate() >= (new Date(lobby)).getDate())
        return 'afterTomorrow'
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
            case 'tomorrow':
              tomorrow.push(lobbies[i])
              break
            case 'done':
              done.push(lobbies[i])
              break
            case 'afterTomorrow':
              afterTomorrow.push(lobbies[i])
              break
            default:
              others.push(lobbies[i])
          }
        }
      }
    }
    setLobbyToState()
  }, [lobbies, done, tomorrow, afterTomorrow, others, toDay])

  return (
    <div className='container'>
      <h2 className='event-title'>{t('Events.7')}</h2>
      <div className='wrapper'>
        {
          width > 500 ? (
            toDay.length !== 0 ? (
              <TournamentSlider
                class='tournament-slide'
                list={toDay && toDay}
              />
            ) : <div className='tournament-doesnt'>{t('Events.8')}</div>
          ) : (
            toDay.length !== 0 ? (
              toDay.map((item) => (
                <TournamentSlide
                  class='tournament-slide less'
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  date={item.date}
                  name={item.name}
                  players={item.player_list}
                />
              ))
            ) : (
              <div className='tournament-doesnt'>{t('Events.8')}</div>
            )
          )
        }
      </div>
      <h2 className='event-title'>{t('Events.9')}</h2>
      <div className='wrapper'>
        {
          width > 500 ? (
            tomorrow.length !== 0 ? (
              <TournamentSlider
                class='tournament-slide'
                list={tomorrow && tomorrow}
              />
            ) : <div className='tournament-doesnt'>{t('Events.10')}</div>
          ) : (
            tomorrow.length !== 0 ? (
              tomorrow.map((item) => (
                <TournamentSlide
                  class='tournament-slide less'
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  date={item.date}
                  name={item.name}
                  players={item.player_list}
                />
              ))
            ) : (
              <div className='tournament-doesnt'>{t('Events.10')}</div>
            )
          )
        }
      </div>
      <h2 className='event-title'>{t('Events.16')}</h2>
      <div className='wrapper'>
        {
          width > 500 ? (
            afterTomorrow.length !== 0 ? (
              <TournamentSlider
                class='tournament-slide'
                list={afterTomorrow && afterTomorrow}
              />
            ) : <div className='tournament-doesnt'>{t('Events.17')}</div>
          ) : (
            afterTomorrow.length !== 0 ? (
              afterTomorrow.map((item) => (
                <TournamentSlide
                  class='tournament-slide less'
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  date={item.date}
                  name={item.name}
                  players={item.player_list}
                />
              ))
            ) : (
              <div className='tournament-doesnt'>{t('Events.17')}</div>
            )
          )
        }
      </div>
      <h2 className='event-title more'>{t('Events.12')}</h2>
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