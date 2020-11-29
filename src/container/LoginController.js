import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login";
import LoginUserInfo from "../components/User/LoginUserInfo";
import {NavLink} from 'react-router-dom'
import {showLogin} from "../store/actions/modalLogin";
import { logoutActionCreator } from "../store/actions/profile";

import IncognitoIcon from '../assets/icons/incognito.svg'

const LoginController = () => {
  const [modalUserInfo, setModalUserInfo] = React.useState(false)
  const dispatch = useDispatch()
  const {
    isLogged,
    isLoading,
    name,
    balance,
    phone,
  } = useSelector(state => ({
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.name,
    balance: state.profile.balance,
    phone: state.profile.myProfile.phone,
  }))

  const showLog = () => {
    setModalUserInfo(false)
    dispatch(showLogin())
  }

  const handleLogout = () => {
		dispatch(logoutActionCreator())
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
