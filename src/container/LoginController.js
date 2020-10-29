import React, {useState} from 'react'

import Login from "../components/UI/Login/Login";
import Registr from "../components/UI/Login/Registr";
import LoginUserInfo from "../components/layout/LoginUserInfo";

import avatar from '../assets/icons/avatar.png'

const LoginController = () => {
  const [loginModal, setLoginModal] = useState(false)
  const [registrModal, setRegistrModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({
    username: 'erlan',
    avatar: avatar,
    money: 400
  })

  const showLogin = () => {
    setLoginModal(!loginModal)
  }
  const showRegistr = () => {
    setRegistrModal(!registrModal)
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
            onClick={showRegistr}
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
        registrModal ? (
          <Registr
            showRegistr={showRegistr}
            registr={registrModal}
            showBack={registrModal}
            backdropClicked={showRegistr}
          />
        ) : null
      }
    </div>
  )
}

export default LoginController