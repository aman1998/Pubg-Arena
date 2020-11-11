import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import LoginUserInfo from "../components/User/LoginUserInfo";

import {showLogin} from "../store/actions/modalLogin";
import {showRegister} from "../store/actions/modalRegister";
import RegTemplate from '../components/UI/Login/RegTemplate';
import {checkIsLog, setProfile, setToken} from "../store/actions/profile";
import {logOut} from "../store/actions/logInOut";
import axios from "../axios/axios";

const LoginController = () => {
  const dispatch = useDispatch()
  const {
    loginModal,
    registerModal,
    isLogged,
    isLoading,
    name,
    money,
    phone,
    token
  } = useSelector(state => ({
    loginModal: state.modalLogin,
    registerModal: state.modalRegister,
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.name,
    money: state.profile.myProfile.money,
    phone: state.profile.myProfile.phone,
    token: state.profile.token
  }))

  const showLog = () => {
    dispatch(showLogin())
  }

  const showReg = () => {
    dispatch(showRegister())
  }

  const handleLogout = () => {
    dispatch(setProfile({favoritesList: []}))
    dispatch(logOut())
    dispatch(checkIsLog(false))
    axios.post('/logout/', {
      headers:{
        'Authorization': token
      }
    })
      .then(response => {
        localStorage.removeItem('token')
        dispatch(setToken(null))
      })
      .catch(e => console.log(e))
  }

  return (
    <div className={isLogged ? 'blockRight loggedIn' : 'blockRight'}>
      {
        isLoading ? null : (
          isLogged ? (
            <LoginUserInfo
              phone={phone}
              name={name}
              money={money}
              handleLogout={handleLogout}
            />
          ) : (
            <>
              <div className='item itemsLogin' onClick={showLog}>
                Войти
              </div>
              <div className='item itemsLogin register' onClick={showReg}>
                Регистрация
              </div>
            </>
          )
        )
      }
      {
        loginModal ? (
          <Login login={loginModal} showBack={loginModal}/>
        ) : null
      }
      {
        registerModal ? (
          <RegTemplate
            register={registerModal}
            showBack={registerModal}
          />
        ) : null
      }
    </div>
  )
}

export default LoginController