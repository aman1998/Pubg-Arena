import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"
import {NavLink} from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'

import {showLogin} from "../../../store/actions/modalLogin"
import {fetchLoginActionCreator} from "../../../store/actions/profile"

import Header from '../../SignUp/Header'
import BackDrop from "../BackDrop";

import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation();

  const [down, setDown] = React.useState(false)
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)
  
  const dispatch = useDispatch()
  const {loginModal, loading} = useSelector(state => ({
    loginModal: state.modalLogin,
    loading: state.fetch.post.loading,
  }))

  const showLog = () => {
    dispatch(showLogin())
  }

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }

    const removeError = () => {
    setError(false)
  }

  return (
    <>
      <BackDrop show={loginModal} close={showLog} />
      <div className={`login ${loginModal ? 'login-up' : down ? 'login-down' : ''}`}>
        <Header title='Вход' class='log' close={showLog} down={setDown}/>
        <Formik
          initialValues={
            {
              password: '',
            }
          }
          validationSchema={
            Yup.object().shape({
              password: Yup.string()
                .min(6, t('Validate.5'))
                .required(t('Validate.6')),
            })
          }
          onSubmit={
            fields => {
              if(phone) {
                fields.phone = phone;
                handleLogin(fields)
              }
              else {
                setError(true)
              }
            }
          }
        >
          {() => (
            <Form className='loginForm'>
              <PhoneInput
                country='kg'
                onlyCountries={['kg']}
                disableDropdown
                containerClass='phone'
                placeholder={t('Validate.7')}
                value={phone}
                onChange={setPhone}
                onFocus={removeError}
                className='loginPhone'
              />
              {error ? <div className='error'>Ошибка ввода</div> : null}
              <Field type="password" name="password" placeholder={t('Validate.6')}/>
              <ErrorMessage name="password" component="div" className='error'/>
              <NavLink to='/change-password' className='link-change-pass' activeClassName="link-change-pass" exact onClick={showLog}>{t('Login.11')}</NavLink>
              <NavLink to='/signUp' className='link-change-pass' activeClassName="link-change-pass" onClick={showLog} exact>{t('Validate.1')}?</NavLink>
              <button type="submit" className='loginFormBtn log'>
                {loading ? <div className='login-loading'></div> : t('Login.btns.3')}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login

