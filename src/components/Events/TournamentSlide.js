import React from 'react'
import {NavLink} from 'react-router-dom'
import {getJustDate} from "../../axios/dateFormatter"

const TournamentSlide = (props) => {
  return (
    <div className='tournament-slide'>
      <NavLink to={`/lobby/${props.id}`}>
        <img src={`${props.image}`} className='image' alt='today' />
        <div className='text'>
          <p>{getJustDate(props.date)}</p>
          <p>{props.name}</p>
          <p>Вступили {props.players.length}/100</p>
        </div>
      </NavLink>
    </div>
  )
}

export default TournamentSlide