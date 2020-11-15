import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import {NavLink} from "react-router-dom";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer-logo'>
          <h2>LOGO</h2>
        </div>
        <div className='footer-main'>
          <div className='title'>Главная</div>
          <div className='text'>Условия пользования</div>
        </div>
        <div className='footer-private'>
          <div className='title'>Личный кабинет</div>
          <div className='text'>Политика конфидициальности</div>
        </div>
        <div className="footer-soc">
          <NavLink to='https://facebook.com' >
            <FacebookIcon className='facebook-icon'/>
          </NavLink>
          <NavLink to='https://instagram.com'>
            <InstagramIcon className='insta-icon'/>
          </NavLink>
          <NavLink to='https://twitter.com'>
            <TwitterIcon className='twitter-icon'/>
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer