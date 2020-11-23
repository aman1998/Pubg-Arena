import React from 'react'

import Phone from '../../assets/img/phone-2.png'
import ImgShiet from '../../assets/icons/shiet.svg'
import ImgTrend from '../../assets/icons/trending-up.svg'
import ImgUsers from '../../assets/icons/user-plus.svg'
import ImgEdit from '../../assets/icons/edit-3.svg'

const HomeInfo2 = () => {
  return (
    <section className='info-content-2 container'>
      <h1>Вся жизнь - игра</h1>
      <div className='content'>
        <div>
          <img src={Phone} alt='#' className='phone'/>
          <div className='text-item rate-mobile'>
            <img src={ImgTrend} alt='#' />
            <div>Рейтинг</div>
            <p>
            Играй  и займи место в дневном, недельном или ежемесячном рейтинге   
            </p>
          </div>
        </div>
        <div className='info-text'>
          <div className='text-item'>
            <img src={ImgEdit} alt='#'/>
            <div>Регистрация</div>
            <p>
            Аккаунт создается удобным для вас способом   
            </p>
          </div>
          <div className='text-item'>
            <img src={ImgUsers} alt='#' />
            <div>Играй сам или в команде</div>
            <p>
            Проводим большое количество турниров для всех режимов  
            </p>
          </div>
          <div className='text-item'>
            <img src={ImgShiet} alt='#' />
            <div>Разнообразные форматы</div>
            <p>
            Турниры на вхождение в топ, турниры на килы. Всегда есть выбор 
            </p>
          </div>
          <div className='text-item rate'>
            <img src={ImgTrend} alt='#' />
            <div>Рейтинг</div>
            <p>
            Играй  и займи место в дневном, недельном или ежемесячном рейтинге   
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInfo2