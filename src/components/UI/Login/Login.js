import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"
import {NavLink} from 'react-router-dom'

import {showLogin} from "../../../store/actions/modalLogin"
import {fetchLoginActionCreator} from "../../../store/actions/profile"

import Header from '../../SignUp/Header'
import BackDrop from "../BackDrop";

const Login = () => {
  const [down, setDown] = React.useState(false)
  const dispatch = useDispatch()
  const {loginModal, loading, success} = useSelector(state => ({
    loginModal: state.modalLogin,
    loading: state.fetch.post.loading,
    success: state.fetch.post.success
  }))

  const showLog = () => {
    dispatch(showLogin())
  }

  const handleLogin = (body) => {
    dispatch(fetchLoginActionCreator(body))
  }

  return (
    <>
      <BackDrop show={loginModal} close={showLog} />
      <div className={`login ${loginModal ? 'login-up' : down ? 'login-down' : ''}`}>
        <Header title='Вход' class='log' close={showLog} down={setDown}/>
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
                .required('Введите номер!'),
              password: Yup.string()
                .min(6, 'Минимум 6 символов')
                .required('Введите пароль!'),
            })
          }
          onSubmit={
            fields => {
              handleLogin(fields)
              // dispatch(showLogin())
            }
          }
        >
          {() => (
            <Form className='loginForm'>
              <Field type="text" name="phone" placeholder='phone'/>
              <ErrorMessage name="phone" component="div" className='error'/>
              <Field type="password" name="password" placeholder='Пароль'/>
              <ErrorMessage name="password" component="div" className='error'/>
              <NavLink to='/change-password' className='change-pass' exact onClick={showLog}>Забыли пароль?</NavLink>
              <button type="submit" className='loginFormBtn log'>
                {loading ? <div className='login-loading'></div> : 'Вход'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login

