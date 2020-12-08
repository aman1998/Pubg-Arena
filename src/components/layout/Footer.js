import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'

import Logo from '../../assets/icons/logo.svg'
import Pay24 from '../../assets/icons/pay24.svg'

import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='footer'>
        <div className='footer-header container'>
          <div>
            <div className='footer-logo'>
              <img src={Logo} alt='#'/>
            </div> 
            <div>
              <a href='https://www.facebook.com/Arena-games-100198175303535' target='_blank' rel="noreferrer">
                <FacebookIcon className='facebook-icon'/>
              </a>
              <a href='https://www.instagram.com/arenagames.io/' target='_blank' rel="noreferrer">
                <InstagramIcon className='insta-icon'/>
              </a>
              <a href='https://t.me/arenagamesio' target='_blank' rel="noreferrer">
                <TelegramIcon className='twitter-icon'/>
              </a>
            </div>
          </div>
          <nav>
            <ul><NavLink to='/' exact>{t('Footer.1')}</NavLink></ul>
            <ul><NavLink to='/profile' exact>{t('Footer.2')}</NavLink></ul>
            <ul><NavLink to='/tournaments' exact>{t('Footer.3')}</NavLink></ul>
            <ul><NavLink to='/rules' exact>{t('Footer.4')}</NavLink></ul>
          </nav>
          <nav>
            <ul><NavLink to='/terms' exact>{t('Footer.5')}</NavLink></ul>
            <ul><NavLink to='/privacy' exact>{t('Footer.6')}</NavLink></ul>
            <ul><NavLink to='/refund' exact>{t('Footer.7')}</NavLink></ul>
            <ul><NavLink to='/support' exact>{t('Footer.8')}</NavLink></ul>
          </nav>
          <div className='footer-header--rate'>
            <div>+18</div>
            {/* <img src={Pay24} alt='#'/> */}
          </div>
        </div>
        <div className="footer-soc-mobile">
          <a href='https://www.facebook.com/Arena-games-100198175303535'  target='_blank' rel="noreferrer">
            <FacebookIcon className='facebook-icon'/>
          </a>
          <a href='https://www.instagram.com/arenagames.io/' target='_blank' rel="noreferrer">
            <InstagramIcon className='insta-icon'/>
          </a>
          <a href='https://t.me/arenagamesio' target='_blank' rel="noreferrer">
            <TelegramIcon className='twitter-icon'/>
          </a>
        </div>
        <div className='footer-text container'>
          {t('Footer.9')}
        </div>
        <div className='rate-mobile'>
          {/* <img src={Pay24} alt='#'/> */}
          <div>+18</div>
        </div>
        <div className='footer-footer'>
          {t('Footer.10')}
        </div>
    </footer>
  )
}

export default Footer