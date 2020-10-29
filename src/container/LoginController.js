import React, {useState} from 'react'

import Login from "../components/UI/Login/Login";
import LoginUserInfo from "../components/layout/LoginUserInfo";

import avatar from '../assets/icons/avatar.png'

const LoginController = () => {
  const [loginModal, setLoginModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)
  const [user, setUser] = useState({
    username: 'erlan',
    avatar: avatar,
    money: 400
  })

  const showLogin = () => {
    setLoginModal(!loginModal)
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
            onClick={showLogin}
            >
              Регистрация
            </div>
          </>
        )
      }
      {loginModal ? <Login showLogin={showLogin} login={loginModal} showBack={loginModal} backdropClicked={showLogin} /> : null}
    </div>
  )
}

export default LoginController