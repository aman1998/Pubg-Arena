import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"
import Logo from '../../assets/icons/logo.svg'
import LoginController from "../../container/LoginController";
import IsAuth from '../UI/IsAuthState'

const Header = () => {
  const {isLogged, isPhone, isActivate} = useSelector(state => ({
    isLogged: state.isLogged,
    isPhone: state.register.isPhone,
    isActivate: state.register.isActivate
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
              className='items home'
              activeClassName='active'
              exact
            >
              Главное
            </NavLink>
            <div className='line-vert'></div>
            { isLogged ?
            <NavLink
              to='/profile'
              className='items profile'
              activeClassName='active'
            >
              Личный кабинет
            </NavLink> :
              null}
          </div>
          <LoginController />
        </nav>
      </div>
      <IsAuth
        class = {isLogged || isPhone || isActivate ? 'success' : 'error'}
        text = {isLogged ? 'Вы успешно вошли!' : isPhone ? 'Вам отправили код активации' : isActivate ? 'Активация прошла' : 'Ошибка входа'}
      />
    </header>
  )
}

export default Header