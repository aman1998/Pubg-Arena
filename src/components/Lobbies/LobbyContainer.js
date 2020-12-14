import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Timer from '../UI/Timer'
import Players from './Players'
import {getDate} from "../../axios/dateFormatter"
import Popup from '../UI/EnterGame'
import {showLogin} from '../../store/actions/modalLogin'

import { useTranslation } from 'react-i18next'

const LobbyContainer = (props) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  // const [distance, setDistance] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [password, setPassword] = useState(false)
  const [popup, setPopup] = useState(false)
  const [passValue, setPassValue] = useState('')
  const [idValue, setIdValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const {myProfile,  isLoading, isLog, isPlayed} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    isLoading: state.isLoading,
    isLog: state.isLogged,
    isPlayed: state.lobbies.isPlayed
  }))

  const openPopup = () => {
    if(isLog === false) {
      dispatch(showLogin())
    }
    else {
      setPopup(true)
    }
  }
  const closePopup = () => {
    setPopup(false)
  }

  const showPass = () => {
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].id === myProfile.pk) {
        setPassword(!password)
      }
    }
  }

  const isUserIsPlaying = () => {
    for (let i = 0; i < props.players.length; i++) {
      if (props.players[i].id === myProfile.pk) {
        console.log(myProfile.pk)
        return true
      }
    }
    return false
  }

  useEffect(() => {
    if(props.players){
      setIsPlaying(isUserIsPlaying())
    }
    console.log('myProfile: ', myProfile)
    const countdownDateFormat = `${props.date}`.split("+")[0]
    const countdownDate = new Date(countdownDateFormat).getTime()
    const now = new Date().getTime()
    const distance = countdownDate - now;
    setIdValue(props.pass.slice(0, props.pass.indexOf(' ')))
    if(distance <= 600000) {
      setPassValue(props.pass.slice(props.pass.indexOf(' ')))
    }
    // else {
    //   setPassValue(t('Events.code.2'))
    // }
  }, [props.players, myProfile, isLoading, showPassword]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container wrapper'>
      <section className='lobby'>
        <div className='lobby-left'>
          <img src={`${props.image}`} alt='#' className='avatar'/>
          <div className='lobby-content'>
            <div className='map'>{t('Events.1')}: {props.map}</div>
            <div className='date'>{getDate(props.date)}</div>
            <div className='name'>{props.name}</div>
            <div className='rule'>{t('Events.2')} <span>
                    <NavLink
                      to={`/rules`}
                      exact
                    >
                        {t('Events.3')}
                    </NavLink>
              </span></div>
            <div className='price'>{t('Events.4')}:
              <span>
                {`  ${props.priceGame} ${t('Events.14')}`}
              </span>
            </div>
            <div className='price'>{t('Events.5')}:
              <span>
                {`  ${props.priceKill} ${t('Events.14')}`}
              </span>
            </div>
            {props.date !== '0000-00-00T00:00:00+06:00' ?
              <Timer
                date={props.date}
                showPass={setShowPassword}
                pass={showPassword}
                isPlayed={isPlayed}
              /> : ' '}
            {isPlaying || isPlayed ?
              <button className='lobby-content__btn btn-disabled' disabled>{t('Events.btns.1')}</button> :
              <button className='lobby-content__btn btn' onClick={openPopup}>{t('Events.btns.1')}</button> }
            {isPlaying ? <button className='lobby-content__btn pass' onClick={showPass}>{
              password ? t('Events.btns.6') : t('Events.btns.5')
            }</button> : null}
            {password === true ?
              <div className='password-block'>
                <div className='password-title'>{t('Events.code.1')}</div>
                <div className='password'>ID Game: <span>{idValue}</span></div>
                <div className='password'>Code Game: <span>{passValue || t('Events.code.2')}</span></div>
              </div> : null}
          </div>
        </div>
        <Players players={props.players} id={props.lobby_id}/>
        {popup ?
          <Popup
            id={props.id}
            show={popup}
            priceGame={props.priceGame}
            closePopup={closePopup}
          /> : null}
      </section>
    </div>
  )
}

export default LobbyContainer
