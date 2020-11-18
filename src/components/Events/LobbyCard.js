import React from "react"
import {getDate} from "../../axios/dateFormatter"
import {NavLink} from "react-router-dom"

const LobbyCard = (props) => {
  return (
    <section className='event' key={props.id}>
      <img
        src={`${props.image}`}
        alt='image'
        className='avatar'
        // style={avatarState ? {opacity: '0.4'} : {opacity: '1'}}
      />
      <div className='name'>{props.name}</div>
      <div className='map'>{props.map}</div>
      <div className='date'>{getDate(props.date)}</div>
      <div className='rule'>
        Я ознакомлен с
        <span>
          <NavLink to={`/terms`} exact>
            Условиями пользования
          </NavLink>
        </span>
        <p>
          и с
          <span>
            <NavLink to={`/privacy`} exact>
              Политикой конфиденциальности
            </NavLink>
          </span>
        </p>
      </div>
      <div className='price price-title'>Цена за участие</div>
      <div className='price'>{props.price} сомов</div>
      <div className='price price-title'>Цена за убийство</div>
      <div className='price'>{props.kill_award} сомов</div>
      {props.checkIsTime(props.date, props.id)}
    </section>
  )
}

export default LobbyCard
