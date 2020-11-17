import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getDate} from '../../axios/dateFormatter'

import avatar from '../../assets/img/pubg.jpg'

const Event = () => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list,
  }))

  const checkIsTime = (time, id) => {
    const  countdownDateFormat = `${time}`.split("+")[0]
    const countdownDate = new Date(countdownDateFormat).getTime()
    const now = new Date().getTime()
    const distance = countdownDate - now
    if(distance < 0 && distance > -1800000) {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
          style={{background:'#F2C00F'}}
        >
          Игра уже началась
        </NavLink>
      )
    }
    else if (distance < -1800000) {
      return (
        <NavLink
          to={`/lobby/${id}`}
          exact
          className='info-bottom__btn btn'
          style={{background:' rgba(45, 144, 105, 0.4)'}}
        >
          Игра уже закончилась
        </NavLink>
      )
    }
    else {
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


  return (
    <div className='wrapper container'>
      {
        lobbies ? lobbies.map(item => (
          <section className='event' key={item.id}>
            <img 
              src={`${item.image}`} 
              alt='image' 
              className='avatar' 
              // style={avatarState ? {opacity: '0.4'} : {opacity: '1'}}
              />
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
            <div className='price price-title'>Цена за участие</div>
            <div className='price'>{item.price} сомов</div>
            <div className='price price-title'>Цена за убийство</div>
            <div className='price'>{item.kill_award} сомов</div>
            { checkIsTime(item.date, item.id) }
          </section>
        )) : <div>loading..</div>
      }
    </div>
  )
}

export default Event