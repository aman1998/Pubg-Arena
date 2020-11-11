import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = (props) => {

  return (
    <Formik
      initialValues={
        {
          name: '',
          player_id: '',
          phone: props.phone,
          password: '',
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
        })
      }
      onSubmit ={
        fields => {
          props.handleRegister(fields)
        }
      } >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="phone" placeholder='phone' value={props.phone} disabled/>
          <ErrorMessage name="phone" component="div" className='error'/>
          <Field type="text" name="name" placeholder='name'/>
          <ErrorMessage name="name" component="div" className='error'/>
          <Field type="text" name="player_id" placeholder='pubg id'/>
          <ErrorMessage name="player_id" component="div" className='error'/>
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Регистрация
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

