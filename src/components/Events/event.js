import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getDate} from '../../axios/dateFormatter'

import avatar from '../../assets/img/pubg.jpg'

const Event = () => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))

  return (
    <div className='wrapper container'>
      {
        lobbies ? lobbies.map(item => (
          <section className='event' key={item.id}>
            <img src={avatar} alt='image' className='avatar'/>
            <div className='name'>{item.name}</div>
            <div className='map'>{item.map}</div>
            <div className='date'>{getDate(item.date)}</div>
            <div className='rule'>
              Я ознакомлен с <span>
                    <NavLink
                      to={`/terms`}
                      exact
                    >
                      Условиями пользования
                    </NavLink>
                  </span> 
              <p>
              и с <span>
                  <NavLink
                    to={`/privacy`}
                    exact
                  >
                    Политикой конфиденциальности
                  </NavLink>
                </span>
              </p>
            </div>
            <div className='price price-title'>Цена за участия</div>
            <div className='price'>{item.price} сомов</div>
            <div className='price price-title'>Цена за убийство</div>
            <div className='price'>{item.kill_award} сомов</div>
            <NavLink
              to={`/lobby/${item.id}`}
              exact
              className='info-bottom__btn btn'
            >
              Подробнее
            </NavLink>
          </section>
        )) : <div>loading..</div>
      }
    </div>
  )
}

export default Event