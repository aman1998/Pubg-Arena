import React  from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from './Header'
import * as Yup from 'yup';

const Login = (props) => {
  const signIn = (body) => {
    fetch(`http://localhost:1717/registr`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }
  return (
    <div className='login'>
      <Header title={props.title} bg={props.bg} close={props.close}/>
      <Formik
        initialValues={
          props.title == 'Регистрация' ? 
          {
            login: '',
            email: '',
            password: '',
            confirmPassword: '',
        } :
        {
          login: '',
          email: '',
          password: '',
      }
        }
        validationSchema={
          props.title === 'Вход' ?
          Yup.object().shape({
            login: Yup.string()
                .required('Введите никнейм!'),
            email: Yup.string()
                .email('Неправильный формат')
                .required('Введите почту!'),
            password: Yup.string()
                .min(6, 'Минимум 6 символов')
                .required('Введите пароль!'),
        }) :
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
        onSubmit={fields => {
            signIn(fields)
        }}
    >
        {() => (
            <Form className='loginForm'>
                <Field type="text" name="login" placeholder='Никнейм'/>
                <ErrorMessage name="login" component="div" className='error'/>
                <Field name="email" type="text" placeholder='Почта'/>
                <ErrorMessage name="email" component="div" className='error'/>
                <Field type="password" name="password" placeholder='Пароль'/>
                <ErrorMessage name="password" component="div" className='error'/>
                {props.title == 'Регистрация' ? 
                <div>
                  <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
                  <ErrorMessage name="confirmPassword" component="div" className='error'/>
                </div>
                : ''
              }
                <button type="submit"  className='loginFormBtn' style={{background: props.bg}}>
                {props.title}
              </button>
            </Form>
        )}
    </Formik>
    </div>
  )
}

export default Login
