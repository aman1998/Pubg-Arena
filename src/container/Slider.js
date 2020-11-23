import React from 'react'

import pubg1 from '../assets/img/main-pubg.png'
import pubg2 from '../assets/img/pubg-slide2.jpg'

const Slider = () => {

  return (
    <div className='slider-box'>
      <div className='slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1'/>
          <input type='radio' name='radio-btn' id='radio2'/>
          <input type='radio' name='radio-btn' id='radio3'/>
          <input type='radio' name='radio-btn' id='radio4'/>

          <div className='slide first' >
            <img src={pubg1} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                Играй виртуально, зарабатывай реально!
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg2} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                Арена! обучает, развлекает, заработать помогает!
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg1} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                Не так важно, как тебя ударили, - важно, как ты встал и ответил.
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg2} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                ВЫИГРЫВАЙ И ЗАРАБАТЫВАЙ ДЕЛАЯ ЧТО ЛЮБИШЬ!
              </div>
            </div>
          </div>
        </div>
        <div className='navigation-manual'>
          <label htmlFor='radio1' className='manual-btn' />
          <label htmlFor='radio2' className='manual-btn' />
          <label htmlFor='radio3' className='manual-btn' />
          <label htmlFor='radio4' className='manual-btn' />
        </div>
      </div>
    </div>
  )
}

export default Slider