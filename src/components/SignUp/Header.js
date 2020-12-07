import React from 'react'
import Cancel from '../../assets/icons/cancel'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = (props) => {
  const { t } = useTranslation();

  const closeModal = () => {
    props.close()
    props.down(true)
  }
  return (
    <div>
      {props.title === 'Регистрация' ? null : <div className='cancel' onClick={closeModal}><Cancel /></div>}
      <div className='loginHeaderContent'>
        <div className={`${props.title !== 'Регистрация' ? 'login-title ' :' signUp-title'}`}>{t('Login.3')}</div>
        {props.title === 'Регистрация' ? 
        <div className='signUp-text'>{t('Login.4')}  
          <p>{t('Login.5')} <NavLink to='/terms' exact>{t('Login.6')}</NavLink></p> <p>{t('Login.7')} <NavLink to='/rules' exact>{t('Login.8')}</NavLink></p>
          {t('Login.9')}
        </div> : 
        <div className='login-text'>{t('Login.10')}</div>}
      </div>
    </div>
  )
}

export default Header