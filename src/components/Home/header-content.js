import React from 'react'
import {NavLink} from 'react-router-dom' 

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const Header = () => {
  return (
    <section className='home-header'>
      <div  className='header-content container'>
        <h1>Играй здесь и сейчас</h1>
        <div className='best'>Стань лучшим </div>
        <div>Соревнуйся и выигрывай</div>
        <div>
          <NavLink
            to='/tournaments'
            className='header-btn'
            exact
          >
          Играть
          </NavLink>
        </div>
        <div className='header-footer'>Присоединись к самой быстрорастущей киберспортивной платформе</div>
        <div className="header-icons">
          <div className='header-line'> </div>
          <a href='https://facebook.com'>
            <FacebookIcon className='facebook-icon'/>
          </a>
          <a href='https://instagram.com'>
            <InstagramIcon className='insta-icon'/>
          </a>
          <a href='https://twitter.com'>
            <TwitterIcon className='twitter-icon'/>
          </a>
          <div className='header-line'> </div>
        </div>
      </div>
    </section>
  )
}

export default Header