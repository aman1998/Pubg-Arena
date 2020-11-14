import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Timer from '../UI/Timer'

import {getTime} from '../../store/actions/timer'

import avatar from '../../assets/img/pubg.jpg'

const Event = (props) => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))

  const dispatch = useDispatch()

  return (
    <div className='wrapper container'>
      {
        lobbies.map(item => (
        <section className='event' key={item.id}>
            <img src={avatar} alt='#' className='avatar'/>
            <div className='name'>{item.name}</div>
            <div className='map'>{item.map}</div>
            <div className='date'>{item.date}</div>
            <div className='rule'>
            Я ознакомлен с <span>Условиями пользования</span> <p>и с <span>Политикой конфидициальности</span></p>
            </div>
            <div className='price price-title'>Цена за участия</div>
            <div className='price'>{item.price} сомов</div>
            <div className='price price-title'>Цена за участия</div>
            <div className='price'>{item.kill_award} сомов</div>
            <Timer date={item.date} />
            <NavLink
              to={`/lobby/${item.id}`}
              exact
              className='info-bottom__btn btn'
              onClick={() => dispatch(getTime(item.date))}
            >
              Подробнее
            </NavLink>
        </section>
        ))
      }
    </div>
  )
}

export default Event