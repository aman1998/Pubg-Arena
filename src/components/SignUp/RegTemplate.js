import React, {useState} from 'react'
import Register from './Register'
import Phone from '../UI/Login/Phone'
import Activate from './Activate'
import Header from './Header'
import { useTranslation } from 'react-i18next'

const RegTemplate = () => {
  const { t } = useTranslation();

  const [phone, getPhone] = React.useState('')
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const [showRegisterContainer, setShowRegisterContainer] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='signUp'>
      {
        isLogged ? (
          <h2>{t('Login.13')}</h2>
        ) : (
          <>
            <Header title='Регистрация'/>
            {
              showPhone ? (
                <Phone
                  getPhone={getPhone}
                  // handlePhone={handlePhone}
                  showActivate={setShowActivate}
                  showPhone={setShowPhone}
                  errorBtn={t('Login.btns.5')}
                  placeholder={t('Placeholder.2')}
                  btn={t('Login.btns.1')}
                  errorInput={t('Validate.2')}
                  validate={t('Validate.10')}
                />
              ) : showActivate ? (
                <Activate
                  phone={phone}
                  showActivate={setShowActivate}
                  showReg={setShowRegisterContainer}
                  placeholder={t('Placeholder.1')}
                  errorBtn={t('Login.btns.5')}
                  errorInput={t('Validate.9')}
                  btn={t('Login.btns.2')}
                />
              ) : showRegisterContainer ?
                <Register 
                  showRegistered={setIsLogged} 
                  phone={phone}
                  nickValidate={t('Validate.8')}
                  passValidate={t('Validate.5')}
                  passValidate2={t('Validate.6')}
                  passValidate3={t('Validate.3')}
                  passValidate4={t('Validate.11')}
                  checkValidate={t('Validate.4')}
                  phoneValidate={t('Placeholder.2')}
                  accept={t('Login.12')}
                  errorBtn={t('Login.btns.5')}
                  btn={t('Login.btns.4')}
                  /> : null
            }

          </>

        )
      }
    </div>
  )
}

export default RegTemplate

