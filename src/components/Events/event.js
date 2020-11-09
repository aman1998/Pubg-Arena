import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

import avatar from '../../assets/img/pubg.jpg'

const Event = (props) => {
  const {lobbies} = useSelector(state => ({
    lobbies: state.lobbies.list
  }))

  return (
    <div className='wrapper'>
      <h1 className='container'>{props.title}</h1>
      {lobbies.map(item => (
        <section className='block' key={item.id}>
          <div className='event container'>
            <img src={avatar} alt='#' className='avatar'/>
            <div className='event-content'>
              <div className='info'>
                <div className='info-top'>
                  <div className='info-top__date'>{`${item.date} `}</div>
                  <div className='info-top__title'>{item.name}</div>
                </div>
                <div className='info-bottom'>
                  <div className='info-bottom__rule'><span>Нажимая кнопку вы соглашаетесь</span>
                    <p>с Нашими правилами турнира</p>
                  </div>
                  <NavLink
                    to={`/lobby/${item.id}`}
                    exact
                    className='info-bottom__btn'
                  >
                    Учавстовать за {item.price} сомов
                  </NavLink>
                </div>
              </div>
              <div className='info2'>
                <div className='info2-top'>
                  <div>
                    <div className='info2-top__price'>
                      <div>{`${item.kill_award} рублей`}</div>
                      <div>Цена за убийство</div>
                    </div>
                    <div className='percent'>100%</div>
                  </div>
                  <div className='info2-top__mode'>{item.map}</div>
                </div>
                <div className='info2-price'></div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Event