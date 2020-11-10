import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"
import {showRegister} from "../../../store/actions/modalRegister";

const Register = (props) => {
  const showReg = () => {
    dispatch(showRegister())
    }

  const dispatch = useDispatch()
  const handleRegister = (body) => {
    fetch(`http://localhost:8000/register/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
        .then(response => {
          console.log(response)
        })
  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          player_id: '',
          phone: '',
          password: '',
          // confirmPassword: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          player_id: Yup.string()
              .required('pubg id'),
            name: Yup.string()
                .required('user name'),
          phone: Yup.string()
            .required('Введите phone!'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите пароль!'),
          // confirmPassword: Yup.string()
          //   .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
          //   .required('Подтвердите пароль!'),
        })
      }
      onSubmit={
        fields => {
          handleRegister(fields)
          dispatch(showRegister())
            console.log(fields)
        }
      }
    >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="name" placeholder='name' />
          <ErrorMessage name="name" component="div" className='error'/>
          <Field type="text" name="phone" placeholder='phone' />
          <ErrorMessage name="phone" component="div" className='error'/>
          <Field type="text" name="player_id" placeholder='pubg id' />
          <ErrorMessage name="player_id" component="div" className='error'/>
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          {/*<Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>*/}
          {/*<ErrorMessage name="confirmPassword" component="div" className='error'/>*/}
          <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Регистрация
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

