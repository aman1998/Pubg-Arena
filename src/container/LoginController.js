import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import Registr from "../components/UI/Login/Registr";
import LoginUserInfo from "../components/layout/LoginUserInfo";

import avatar from '../assets/icons/avatar.png'
import {showLogin} from "../store/actions/modalLogin";
import {showRegister} from "../store/actions/modalRegister";

const LoginController = () => {
  const { loginModal, registerModal, isLog } = useSelector(state => ({
    loginModal: state.modalLogin,
    registerModal: state.modalRegister,
  }))

  const dispatch = useDispatch()
  // const [loggedIn, setLoggedIn] = useState(false)
  const [ user ] = useState({
    username: 'erlan',
    avatar: avatar,
    money: 400
  })

  const showLog = () => {
    dispatch(showLogin())
  }

  const showReg = () => {
    dispatch(showRegister())
  }

  return(
    <div className='blockRight'>
      {
        isLog ? (
          <LoginUserInfo
            userMoney={user.money}
            avatar={avatar}
          />
        ) : (
          <>
            <div
              className='item itemsLogin'
              onClick={showLog}
            >
              Войти
            </div>
            <div
            className='item itemsLogin register'
            onClick={showReg}
            >
              Регистрация
            </div>
          </>
        )
      }
      {
        loginModal ? (
          <Login
            login={loginModal}
            showBack={loginModal}
          />
        ) :  null
      }
      {
        registerModal ? (
          <Registr
            register={registerModal}
            showBack={registerModal}
          />
        ) : null
      }
    </div>
  )
}

export default LoginController