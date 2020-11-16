import React from 'react'

import useWindowDimensions from "../Hooks/useWindowDimentions"

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

import Logo from '../../assets/icons/logo.svg'

import {NavLink} from 'react-router-dom'

const Footer = () => {
  const {width} = useWindowDimensions()
  return (
    <footer className='footer'>
      <div className="container-footer">

        {
          width >= 768 ? (
            <div className='footer-logo'>
              <img src={Logo} alt='#'/>
            </div>
          ) : null
        }
        {
          width <= 768 ? (
            <div className='less'>
        <div className='footer-main'>
          <div className='title'><NavLink to='/' exact>Главная</NavLink></div>
          <div className='text'><NavLink to='/terms' exact>Условия пользования</NavLink></div>
        </div>
        <div className='footer-private'>
          <div className='title'>
            <NavLink to='/profile' exact>Личный кабинет</NavLink>
          </div>
          <div className='text'>
            <NavLink to='/privacy' exact>Политика конфидициальности</NavLink>
          </div>
        </div>
        </div>
          ) : (
              <div className="footer-soc">
                <a href='https://facebook.com' >
                  <FacebookIcon className='facebook-icon'/>
                </a>
                <a href='https://instagram.com'>
                  <InstagramIcon className='insta-icon'/>
                </a>
                <a href='https://twitter.com'>
                  <TwitterIcon className='twitter-icon'/>
                </a>
              </div>
          )
        }
      </div>
    </footer>
  )
}

export default Footer