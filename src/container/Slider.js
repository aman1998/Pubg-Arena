import React from 'react'

import pubg1 from '../assets/img/main-pubg.png'
import pubg2 from '../assets/img/pubg-slide2.jpg'
import pubg4 from '../assets/img/pubg-slide4.jpg'
import pubg5 from '../assets/img/pubg-slide5.jpg'

import { useTranslation } from 'react-i18next'

const Slider = () => {
  const { t } = useTranslation()

  return (
    <div className='slider-box'>
      <div className='slider'>
        <div className='slides'>
          <input type='radio' name='radio-btn' id='radio1'/>
          <input type='radio' name='radio-btn' id='radio2'/>
          <input type='radio' name='radio-btn' id='radio3'/>
          <input type='radio' name='radio-btn' id='radio4'/>

          <div className='slide first' >
            <img src={pubg2} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
              {t('Events.slider.1')}
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg4} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
              {t('Events.slider.2')}
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg1} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
              {t('Events.slider.3')}
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg5} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
              {t('Events.slider.4')}
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