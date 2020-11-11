import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import LoginUserInfo from "../components/User/LoginUserInfo";

import {showLogin} from "../store/actions/modalLogin";
import {showRegister} from "../store/actions/modalRegister";
import RegTemplate from '../components/UI/Login/RegTemplate';
import {checkIsLog, setProfile, setToken} from "../store/actions/profile";
import {logOut} from "../store/actions/logInOut";

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
    money,
    phone
  } = useSelector(state => ({
    loginModal: state.modalLogin,
    registerModal: state.modalRegister,
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.name,
    money: state.profile.myProfile.money,
    phone: state.profile.myProfile.phone
  }))

  const showLog = () => {
    dispatch(showLogin())
  }

  const showReg = () => {
    dispatch(showRegister())
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(setProfile({favoritesList: []}))
    dispatch(setToken(null))
    dispatch(logOut())
    dispatch(checkIsLog(false))
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
              <div className='itemsLoginDesktop'>
                <div className='item itemsLogin ' onClick={showLog}>
                  Войти
                </div>
                <div className='item itemsLogin register' onClick={showReg}>
                  Регистрация
                </div>
              </div>
              <img src={IncognitoIcon} alt='#' className='incognito' onClick={() => setModalUserInfo(!modalUserInfo)}/>
              <div className={modalUserInfo ? 'modalInfo modalReg down' : 'modalInfo modalReg up'}>
                <div className='item itemsLogin' onClick={showLog} style={{marginBottom: '10px'}}>
                  Войти
                </div>
                <div className='item itemsLogin register' onClick={showReg}>
                  Регистрация
                </div>
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