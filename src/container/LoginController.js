import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Login from "../components/UI/Login/Login"
import LoginUserInfo from "../components/User/LoginUserInfo"
import {NavLink} from 'react-router-dom'
import {showLogin} from "../store/actions/modalLogin"
import { logoutActionCreator } from "../store/actions/profile"
import { getLanguage } from "../store/actions/language"

import IncognitoIcon from '../assets/icons/incognito.svg'

import { useTranslation } from 'react-i18next'
import BackDrop from "../components/UI/BackDrop";

const LoginController = () => {
  const { t, i18n } = useTranslation();
  const [modalUserInfo, setModalUserInfo] = React.useState(false)
  const dispatch = useDispatch()

  const {
    isLogged,
    isLoading,
    name,
    balance,
    phone,
    token,
    avatar,
    language
  } = useSelector(state => ({
    isLogged: state.isLogged,
    isLoading: state.isLoading,
    name: state.profile.myProfile.name,
    balance: state.profile.balance,
    phone: state.profile.myProfile.phone,
    token: state.profile.token,
    avatar: state.profile.myProfile.avatar,
    language: state.language.language,
  }))

  useEffect(() => {
    dispatch(getLanguage(localStorage.getItem('i18nextLng')))
  }, [language])

  const showLog = () => {
    setModalUserInfo(false)
    dispatch(showLogin())
  }

  const handleLogout = () => {
		dispatch(logoutActionCreator(token))
  }

  async function handleChange (e) {
    dispatch(getLanguage(e.target.value))
    await i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <div className={isLogged ? 'blockRight loggedIn' : 'blockRight'}>
      {
        isLoading ? null : (
          isLogged ? (
            <LoginUserInfo
              phone={phone}
              name={name}
              balance={balance}
              avatar={avatar}
              handleLogout={handleLogout}
              handleChange={handleChange}
              language={language}
            />
          ) : (
            <>
              <BackDrop show={modalUserInfo} close={() => setModalUserInfo(false)} />
              <div className='itemsLoginDesktop'>
                <div className='item itemsLogin ' onClick={showLog}>
                {t('Login.1')}
                </div>
                <NavLink 
                  to='/signUp'
                  className='item itemsLogin register' 
                  exact>{t('Login.2')}
                </NavLink>
                <div className='select'>
                  <select name = 'myfield' value={language ? language : 'ru'} onChange={handleChange}>
                      <option value="ru">RU</option>
                      <option value="en">EN</option>
                      <option value="kg">KG</option>
                  </select>
                </div>
              </div>
              <div className='itemsLoginMob'>
                <img src={IncognitoIcon} alt='#' className='incognito' onClick={() => setModalUserInfo(!modalUserInfo)}/>
                <div className='select'>
                  <select name = 'myfield' value={language ? language : 'ru'} onChange={handleChange} className='language'>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                    <option value="kg">KG</option>
                  </select>
                </div>
              </div>
              <div className={modalUserInfo ? 'modalInfo modalReg down' : 'modalInfo modalReg up'}>
                <NavLink
                  to='/'
                  className='item home'
                  activeClassName='active'
                  exact
                >
                {t('Header.1')}
                </NavLink>
                <NavLink
                  to='/tournaments'
                  className='item tournaments'
                  activeClassName='active'
                  exact
                >
                  {t('Header.2')}
                </NavLink>
                <NavLink
                  to='/rates'
                  className='item rates'
                  activeClassName='active'
                  exact
                >
                  {t('Header.3')}
                </NavLink>
                <div className='item itemsLogin' onClick={showLog} style={{margin: '0 0 10px 0'}}>
                {t('Login.1')}
                </div>
                <NavLink 
                  to='/signUp'
                  className='item itemsLogin register' 
                  exact>{t('Login.2')}
                </NavLink>
              </div>
            </>
          )
        )
      }
      {
          <Login/>
      }
    </div>
    </>
  )
}

export default LoginController
