import React from 'react'
import Phone from '../../assets/img/phone.png'
import ImgOk from '../../assets/icons/ok.svg'
import ImgXm from '../../assets/icons/XMLID.svg'
import ImgHeadPhone from '../../assets/icons/headphones.svg'


const HomeInfo1 = () => {
  return (
    <section className='home-info--1 container'>
      <h1 className='title'>Оставь свой след в киберспорте</h1>
      <div className='info-content'>
        <div className='info-content--left'>
          <div className='info-statistics'>
            <div>100+ <p>Турниров ежедневно</p></div>
            <div>24 часа <p>Играй в любое удобное время</p></div>
          </div>
          <div>
            <div className='info-text'>
              <img src={ImgOk} alt='#' />
              <div>Arena Античит</div>
              <p>
                Мы верим только в честную игру. Мы разработали свой собственный античтит, который забанил уже 6000 читеров      
              </p>
            </div>
            <div className='info-text'>
              <img src={ImgXm} alt='#' />
              <div>Самые популярные игры</div>
              <p>
              Проводим турниры по самым популярным играм      
              </p>
            </div>
            <div className='info-text'>
              <img src={ImgHeadPhone} alt='#' />
              <div>Отзывчивая поддержка</div>
              <p>
              Наша техподдержка работает 24 часа в сутки. Наши ребята готовы помочь решить любую вашу проблему     
              </p>
            </div>
          </div>
        </div>
        <img src={Phone} alt='phone' className='phone'/>
      </div>
    </section>
  )
}

export default HomeInfo1