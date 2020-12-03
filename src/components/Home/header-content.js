import React from 'react'
import {NavLink} from 'react-router-dom' 

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'

const Header = () => {
  return (
    <section className='home-header'>
      <div  className='header-content container'>
        <h1>Играй здесь и сейчас</h1>
        <div className='best'>Стань лучшим </div>
        <div className='best-2'>Соревнуйся и выигрывай</div>
        <div className='header-btn-wrapper'>
          <NavLink
            to='/tournaments'
            className='header-btn'
            exact
          >
          Играть
          </NavLink>
        </div>
        <div className='header-footer'>
          <div className='header-footer--up'>
            <div>Sanhok</div>
            <div>Miramar</div>
            <div>Erangel</div>
            <div>Vikendi</div>
            <div>Livic</div>
          </div>
          <div className='header-footer--down'>Присоединись к самой быстрорастущей киберспортивной платформе</div>
        </div>
        <div className="header-icons">
          <div className='header-line'></div>
          <a href='https://www.facebook.com/Arena-Games-104788511481561'>
            <FacebookIcon className='facebook-icon'/>
          </a>
          <a href='https://www.instagram.com/arenagames.io/'>
            <InstagramIcon className='insta-icon'/>
          </a>
          <a href='https://t.me/arenagamesio'>
            <TelegramIcon className='twitter-icon'/>
          </a>
          <div className='header-line'> </div>
        </div>
      </div>
    </section>
  )
}

export default Header