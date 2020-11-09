import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";

const Register = (props) => {
  const showReg = () => {
    dispatch(showRegister())
    }

  const dispatch = useDispatch()
  const handleRegister = (body) => {
    fetch(`http://localhost:1717/registr`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
  }

  return (
    <Formik
      initialValues={
        {
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          login: Yup.string()
            .required('Введите никнейм!'),
          email: Yup.string()
            .email('Неправильный формат')
            .required('Введите почту!'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите пароль!'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтвердите пароль!'),
        })
      }
      onSubmit={
        fields => {
          handleRegister(fields)
          dispatch(showRegister())
          alert('Вы успешно зарегистрованы!')
        }
      }
    >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="login" placeholder='Никнейм' />
          <ErrorMessage name="login" component="div" className='error'/>
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
          <ErrorMessage name="confirmPassword" component="div" className='error'/>
          <Field name="email" type="text" placeholder='Почта'/>
          <ErrorMessage name="email" component="div" className='error'/>
          <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Регистрация
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

