import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"
import Logo from '../../assets/icons/logo.svg'
import LoginController from "../../container/LoginController"
import IsAuth from '../UI/IsAuthState'
import Modal from "../UI/Modal";

const Header = () => {
  const {isLogged, isPhone, isActivate, modal} = useSelector(state => ({
    isLogged: state.isLogged,
    isPhone: state.register.isPhone,
    isActivate: state.register.isActivate,
    modal: state.modalRegister
  }))

  window.onscroll = function () {
    myFunction()
  }

  const myFunction = () => {
    const header = document.getElementById('header')
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      header.classList.add('headerScrolled')
    } else {
      header.classList.remove('headerScrolled')
    }
  }
  return (
    <header id='header' className='header position-fixed'>
      <div className='container'>
        <nav className='block'>
          <div className='blockLeft'>
            <NavLink to='/' className='items item-logo' activeClassName='active' >
              <img src={Logo} alt='#' className='logo'/>
            </NavLink>
            {
              modal ? <Modal show={modal} detail='Много игроков, или какая то ошибка' /> : null
            }
            <div className='line-vert'> </div>
            <NavLink
              to='/'
              className='items home'
              activeClassName='active'
              exact
            >
              Главная
            </NavLink>
            <NavLink
              to='/tournaments'
              className='items tournaments'
              activeClassName='active'
              exact
            >
              Турниры
            </NavLink>
            <NavLink
              to='/rates'
              className='items rates'
              activeClassName='active'
              exact
            >
              Рейтинги
            </NavLink>
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