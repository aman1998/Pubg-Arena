import React from "react"
import {getDate} from "../../axios/dateFormatter"

const LobbyCard = (props) => {
  return (
    <section className='event' key={props.id}>
      <img
        src={props.image}
        alt='#'
        className='avatar'
      />
      <div className='name'>{props.name}</div>
      <div className='map'>{props.map}</div>
      <div className='date'>{getDate(props.date)}</div>
      <div className='price price-title'>Стоимость участие</div>
      <div className='price'>{`${props.price} сомов / ${props.price * 5} тенге`}</div>
      <div className='price price-title'>За каждый килл</div>
      <div className='price'>{`${props.kill_award} сомов / ${props.kill_award * 5} тенге`}</div>
      {props.checkIsTime(props.date, props.id)}
    </section>
  )
}

export default LobbyCard
