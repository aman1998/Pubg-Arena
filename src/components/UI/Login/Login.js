import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"

import {showLogin} from "../../../store/actions/modalLogin"
import {fetchLoginActionCreator} from "../../../store/actions/profile"

import Header from './Header'

const Login = () => {
  const dispatch = useDispatch()

  const showLog = () => {
    dispatch(showLogin())
  }

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }
  return (
    <div className='login'>
      <Header title='Вход' bg='#0054ff' close={showLog}/>
      <Formik
        initialValues={
          {
            phone: '',
            password: '',
          }
        }
        validationSchema={
          Yup.object().shape({
            phone: Yup.string()
              .required('Введите никнейм!'),
            password: Yup.string()
              .min(6, 'Минимум 6 символов')
              .required('Введите пароль!'),
          })
        }
        onSubmit={
          fields => {
            handleLogin(fields)
            dispatch(showLogin())
          }
        }
      >
        {() => (
          <Form className='loginForm'>
            <Field type="text" name="phone" placeholder='phone' />
            <ErrorMessage name="phone" component="div" className='error'/>
            <Field type="password" name="password" placeholder='Пароль'/>
            <ErrorMessage name="password" component="div" className='error'/>
            <button type="submit" className='loginFormBtn' style={{background: '#0054ff'}}>
              Вход
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login

