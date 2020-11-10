import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"

import {showLogin} from "../../../store/actions/modalLogin"
import {checkIsLog, getMyProfile as getProfileAction, getMyProfile, setToken} from "../../../store/actions/profile"
import {hideState, showState} from "../../../store/actions/isAuthState";

import Header from './Header'
import {logIn} from "../../../store/actions/logInOut";
import {notLoading} from "../../../store/actions/isLoading";

    const Login = (props) => {
  const showLog = () => {
    dispatch(showLogin())
  }

  const dispatch = useDispatch()
  const handleLogin = (body) => {
    // e.preventDefault()
    fetch(`http://localhost:1717/login/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then( data => {
        dispatch(setToken(data.user.token))
        localStorage.setItem('token',data.user.token )
        // dispatch(setToken(`Token ${data.token}`))
        // localStorage.setItem('token', `Token ${data.token}` )
        dispatch(logIn())
        dispatch(showState())
        setTimeout(() => {
          dispatch(hideState())
        }, 3000)
      })
      .catch(e => {
        dispatch(showState())
        setTimeout(() => {
          dispatch(hideState())
        }, 3000)
        console.log({message: e.message})
      })
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
                console.log(fields)
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

