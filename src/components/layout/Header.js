import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/icons/logo.svg'

const Header = (props) => {
  return (
    <header>
      <div className='container'>
        <nav className='block'>
          <div className='blockLeft'>
            <NavLink to='/' className='items' activeClassName='active' >
              <img src={Logo} alt='#' className='logo'/>
            </NavLink>
            <div className='line-vert'></div>
            <NavLink
              to='/'
              className='items'
              activeClassName='active'
              exact
            >
              Главное
            </NavLink>
          </div>
          <div className='blockRight'>
            <NavLink
              to='/profile'
              className='items'
              activeClassName='active'
            >
              Личный кабинет
            </NavLink> 
            <div
              className='item itemsLogin'
              onClick={props.showLogin}
            >
              Войти
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header