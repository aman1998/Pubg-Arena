import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"

import {showLogin} from "../../../store/actions/modalLogin"
import {getMyProfile, setToken} from "../../../store/actions/profile"

import Header from './Header'
import {logIn} from "../../../store/actions/logInOut";

const Login = (props) => {
  const showLog = () => {
    dispatch(showLogin())
  }

  const dispatch = useDispatch()
  const handleLogin = (body) => {
    // e.preventDefault()
    fetch(`http://localhost:1717/auth`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw response.status
        return response.json()
      })
      .then( data => {
        dispatch(getMyProfile({...data.user.data}))
        dispatch(setToken(data.user.token))
        dispatch(logIn())
        localStorage.setItem('token',data.user.token )
      })
      .catch(e => {
        console.log({message: e.message})
      })
  }
  return (
    <div className='login'>
      <Header title='Вход' bg='#0054ff' close={showLog}/>
      <Formik
        initialValues={
          {
            login: '',
            password: '',
          }
        }
        validationSchema={
            Yup.object().shape({
              login: Yup.string()
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
            <Field type="text" name="login" placeholder='Никнейм' />
            <ErrorMessage name="login" component="div" className='error'/>
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

