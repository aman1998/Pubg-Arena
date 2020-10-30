import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import Login from "../components/UI/Login/Login";
import Registr from "../components/UI/Login/Registr";
import LoginUserInfo from "../components/layout/LoginUserInfo";

import {getAll, setEmail} from "../store/actions/auth";
import {getIsLogged, logIn} from "../store/actions/logInOut";

import avatar from '../assets/icons/avatar.png'

const LoginController = () => {
  const dispatch = useDispatch()
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({
    username: 'erlan',
    avatar: avatar,
    money: 400
  })

  const showLogin = () => {
    setLoginModal(!loginModal)
  }
  const showRegister = () => {
    setRegisterModal(!registerModal)
  }


  return(
    <div className='blockRight'>
      {
        loggedIn ? (
          <LoginUserInfo
            username={user.username}
            userMoney={user.money}
            avatar={avatar}
          />
        ) : (
          <>
            <div
              className='item itemsLogin'
              onClick={showLogin}
            >
              Войти
            </div>
            <div
            className='item itemsLogin register'
            onClick={showRegister}
            >
              Регистрация
            </div>
          </>
        )
      }
      {
        loginModal ? (
          <Login
            showLogin={showLogin}
            login={loginModal}
            showBack={loginModal}
            backdropClicked={showLogin}
          />
        ) :  null
      }
      {
        registerModal ? (
          <Registr
            showRegister={showRegister}
            register={registerModal}
            showBack={registerModal}
            backdropClicked={showRegister}
          />
        ) : null
      }
    </div>
  )
}

export default LoginController