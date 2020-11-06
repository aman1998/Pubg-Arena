import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"
import Logo from '../../assets/icons/logo.svg'
import LoginController from "../../container/LoginController";

const Header = () => {
  const {isLogged} = useSelector(state => ({
    isLogged: state.isLogged
  }))

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
            <div className='line-vert'></div>
            { isLogged ?
            <NavLink
              to='/profile'
              className='items'
              activeClassName='active'
            >
              Личный кабинет
            </NavLink> :
              null}
          </div>
          <LoginController />
        </nav>
      </div>
    </header>
  )
}

export default Header