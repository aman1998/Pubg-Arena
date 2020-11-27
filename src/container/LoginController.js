import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import LoginUserInfo from "../components/User/LoginUserInfo";
import {NavLink} from 'react-router-dom'
import {showLogin} from "../store/actions/modalLogin";
import {showRegister} from "../store/actions/modalRegister";
import RegTemplate from '../components/SignUp/RegTemplate';
import {checkIsLog, setProfile, setToken} from "../store/actions/profile";
import {logOut} from "../store/actions/logInOut";
import axios from "../axios/axios";

import IncognitoIcon from '../assets/icons/incognito.svg'

const LoginController = () => {
  const [modalUserInfo, setModalUserInfo] = React.useState(false)
  const dispatch = useDispatch()
  const {
    loginModal,
    registerModal,
    isLogged,
    isLoading,
    name,
    balance,
    phone,
    token
  } = useSelector(state => ({
    loginModal: state.modalLogin,
    registerModal: state.modalRegister,
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.name,
    balance: state.profile.balance,
    phone: state.profile.myProfile.phone,
    token: state.profile.token
  }))

  const showLog = () => {
    setModalUserInfo(false)
    dispatch(showLogin())
  }

  const showReg = () => {
    setModalUserInfo(false)
    dispatch(showRegister())
  }

  const handleLogout = () => {
    axios.post('/logout/',{},  {
      headers:{
        'Authorization': token
      }
    })
      .then(response => {
        console.log(response)
        localStorage.removeItem('token')
        dispatch(setToken(null))
        dispatch(logOut())
        dispatch(setProfile({}))
        dispatch(checkIsLog(false))
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
              balance={balance}
              handleLogout={handleLogout}
            />
          ) : (
            <>
              <div className='itemsLoginDesktop'>
                <div className='item itemsLogin ' onClick={showLog}>
                  Войти
                </div>
                <NavLink 
                  to='/signUp'
                  className='item itemsLogin register' 
                  exact>Регистрация
                </NavLink>
              </div>
              <img src={IncognitoIcon} alt='#' className='incognito' onClick={() => setModalUserInfo(!modalUserInfo)}/>
              <div className={modalUserInfo ? 'modalInfo modalReg down' : 'modalInfo modalReg up'}>
                <div className='item itemsLogin' onClick={showLog} style={{margin: '0 0 10px 0'}}>
                  Войти
                </div>
                <NavLink 
                  to='/signUp'
                  className='item itemsLogin register' 
                  exact>Регистрация
                </NavLink>
              </div>
            </>
          )
        )
      }
      {
        // loginModal ? (
          <Login/>
        // ) : null
      }
    </div>
  )
}

export default LoginController
