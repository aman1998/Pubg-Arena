import React from "react"
import {getDate} from "../../axios/dateFormatter"

import { useTranslation } from 'react-i18next'

const LobbyCard = (props) => {
  const { t } = useTranslation()

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
      <div className='price price-title'>{t('Events.4')}</div>
      <div className='price'>{`${props.price} ${t('Events.14')}`}</div>
      <div className='price price-title'>{t('Events.5')}</div>
      <div className='price'>{`${props.kill_award} ${t('Events.14')}`}</div>
      {props.checkIsTime(props.date, props.id)}
    </section>
  )
}

export default LobbyCard
