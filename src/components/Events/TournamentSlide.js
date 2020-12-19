import React from 'react'
import {NavLink} from 'react-router-dom'
import {getJustDate, getJustTime} from "../../axios/dateFormatter"

import { useTranslation } from 'react-i18next'

const TournamentSlide = (props) => {
  const { t } = useTranslation()

  return (
    <div className={props.class} >
      <NavLink to={`/lobby/${props.id}`}>
        <img src={`${props.image}`} className='image' alt='today' />
        <div className='time'>{getJustTime(props.date)}</div>
        <div className='tournament-more'>{t('Events.18')}</div>
        <div className='text'>
          <p>{getJustDate(props.date)}</p>
          <p>{props.name}</p>
          <p>{t('Events.13')} {props.players.length}/100</p>
        </div>
      </NavLink>
    </div>
  )
}

export default TournamentSlide