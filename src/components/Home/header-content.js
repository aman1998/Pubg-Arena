import React from 'react'
import {NavLink} from 'react-router-dom' 

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'

import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <section className='home-header'>
      <div  className='header-content container'>
        <h1>{t('Home.header.1')}</h1>
        <div className='best'>{t('Home.header.2')}</div>
        <div className='best-2'>{t('Home.header.3')}</div>
        <div className='header-btn-wrapper'>
          <NavLink
            to='/tournaments'
            className='header-btn'
            exact
          >
          {t('Home.header.4')}
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
          <div className='header-footer--down'>{t('Home.header.5')}</div>
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