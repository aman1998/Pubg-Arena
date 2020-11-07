import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import Registr from "../components/UI/Login/Registr";
import LoginUserInfo from "../components/layout/LoginUserInfo";

import {showLogin} from "../store/actions/modalLogin";
import {showRegister} from "../store/actions/modalRegister";
import {checkIsLog, getMyProfile, setToken} from "../store/actions/profile";
import {logOut} from "../store/actions/logInOut";

const LoginController = () => {
  const dispatch = useDispatch()
  const {
    loginModal,
    registerModal,
    isLogged,
    isLoading,
    name,
    money
  } = useSelector(state => ({
    loginModal: state.modalLogin,
    registerModal: state.modalRegister,
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.username,
    money: state.profile.myProfile.money
  }))

  const showLog = () => {
    dispatch(showLogin())
  }

  const showReg = () => {
    dispatch(showRegister())
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(getMyProfile({favoritesList: []}))
    dispatch(setToken(null))
    dispatch(logOut(false))
    dispatch(checkIsLog(false))
  }

  return (
    <div className={isLogged ? 'blockRight loggedIn' : 'blockRight'}>
      {
        isLoading ? null : (
          isLogged ? (
            <LoginUserInfo
              name={name}
              money={money}
              handleLogout={handleLogout}
            />
          ) : (
            <>
              <div className='item itemsLogin' onClick={showLog} >
                Войти
              </div>
              <div className='item itemsLogin register' onClick={showReg} >
                Регистрация
              </div>
            </>
          )
        )
      }
      {
        loginModal ? (
          <Login login={loginModal} showBack={loginModal} />
        ) : null
      }
      {
        registerModal ? (
          <Registr register={registerModal} showBack={registerModal} />
        ) : null
      }
    </div>
  )
}

export default LoginController