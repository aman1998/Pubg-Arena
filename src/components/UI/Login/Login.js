import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"

import {showLogin} from "../../../store/actions/modalLogin"
import {setProfile, setToken} from "../../../store/actions/profile"
import {hideState, showState} from "../../../store/actions/isAuthState";

import Header from './Header'
import {logIn, logOut} from "../../../store/actions/logInOut";
import axios from "../../../axios/axios";

const Login = (props) => {
  const dispatch = useDispatch()

  const showLog = () => {
    dispatch(showLogin())
  }

  const handleLogin = (body) => {
    axios.post('/login/', {
      data: JSON.stringify(body)
    })
      .then( data => {
        console.log(data)
        dispatch(setProfile({...data}))
        dispatch(setToken(`Token ${data.token}`))
        dispatch(logIn())
        localStorage.setItem('token', `Token ${data.token}` )
        dispatch(showState())
        setTimeout(() => {
          dispatch(hideState())
        }, 3000)
      })
      .catch(e => {
        dispatch(showState())
        dispatch(logOut())
        setTimeout(() => {
          dispatch(hideState())
        }, 3000)
        console.log(e)
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

