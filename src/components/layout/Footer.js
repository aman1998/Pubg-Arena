import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

import Logo from '../../assets/icons/logo.svg'
import Pay24 from '../../assets/icons/pay24.svg'

import {NavLink} from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-header container'>
          <div>
            <div className='footer-logo'>
              <img src={Logo} alt='#'/>
            </div> 
            <div className="footer-soc">
              <a href='https://facebook.com'>
                <FacebookIcon className='facebook-icon'/>
              </a>
              <a href='https://instagram.com'>
                <InstagramIcon className='insta-icon'/>
              </a>
              <a href='https://twitter.com'>
                <TwitterIcon className='twitter-icon'/>
              </a>
            </div>
          </div>
          <nav>
            <ul><NavLink to='/' exact>Главная</NavLink></ul>
            <ul><NavLink to='/profile' exact>Личный кабинет</NavLink></ul>
            <ul><NavLink to='/tournaments' exact>Турниры</NavLink></ul>
            <ul><NavLink to='/rules' exact>Правила игры</NavLink></ul>
          </nav>
          <nav>
            <ul><NavLink to='/terms' exact>Условиями пользования</NavLink></ul>
            <ul><NavLink to='/privacy' exact>Политика конфидициальности</NavLink></ul>
            <ul><NavLink to='#' exact>Политика возвратов</NavLink></ul>
            <ul><NavLink to='#' exact>Техподдержка</NavLink></ul>
          </nav>
          <div className='footer-header--rate'>
            <div>+18</div>
            <img src={Pay24} alt='#'/>
          </div>
        </div>
        <div className="footer-soc-mobile">
          <a href='https://facebook.com'>
            <FacebookIcon className='facebook-icon'/>
          </a>
          <a href='https://instagram.com'>
            <InstagramIcon className='insta-icon'/>
          </a>
          <a href='https://twitter.com'>
            <TwitterIcon className='twitter-icon'/>
          </a>
        </div>
        <div className='footer-text container'>
          Платформа Arena не одобрена, не связана, не поддерживается и не спонсируется Apple Inc, Garena Online Private Limited, PUBG CORPORATION, Activision Publishing, Inc., Supercell Oy или Nintendo Co., Ltd, а также иными владельцами иных игр. Весь контент, названия игр, торговые наименования и / или коммерческий внешний вид, товарные знаки, произведения искусства и связанные изображения являются товарными знаками и / или материалами, защищенными авторским правом соответствующих правообладателей.
        </div>
        <div className='rate-mobile'>
          <img src={Pay24} alt='#'/>
          <div>+18</div>
        </div>
        <div className='footer-footer'>
          © 2020  Все права защищены
        </div>
    </footer>
  )
}

export default Footer