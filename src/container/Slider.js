import React from 'react'

import pubg1 from '../assets/img/pubg-slide1.webp'
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
                PLAY TODAY ON XBOX, PC, PS4, AND STADIA
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg2} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                SURVIVED WILL BE GOD, ANOTHER DEAD
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg1} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                PLAY TODAY ON XBOX, PC, PS4, AND STADIA
              </div>
            </div>
          </div>
          <div className='slide' >
            <img src={pubg2} alt="alt" className='img' />
            <div className='content'>
              <div className='text'>
                WE ARE GOING TO PLAY TOURNAMENTS
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