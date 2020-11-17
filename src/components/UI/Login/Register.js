import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from "react-redux"
import {fetchLoginActionCreator} from "../../../store/actions/profile"
import {showRegister} from "../../../store/actions/modalRegister"

import axios from "../../../axios/axios";

const Register = (props) => {
  const dispatch = useDispatch()

  const handleRegister = ({name, pubg_id, phone, password}) => {
    console.log('register')
    axios.post('/register/', {name, pubg_id, phone, password})
      .then(response => {
        dispatch(showRegister())
        console.log(response)
        dispatch(fetchLoginActionCreator({phone, password}))
      })
      .catch(e => console.log(e))
  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          pubg_id: '',
          phone: props.phone,
          password: '',
          confirmPassword: '',
        }
      }
      validationSchema={
        Yup.object().shape({
          pubg_id: Yup.string()
            .required('pubg id'),
          name: Yup.string()
            .required('user name'),
          phone: Yup.string()
            .required('Введите phone!'),
          password: Yup.string()
            .min(6, 'Минимум 6 символов')
            .required('Введите пароль!'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтвердите пароль'),
        })
      }
      onSubmit ={
        fields => {
          handleRegister({
            name: fields.name,
            pubg_id: fields. pubg_id,
            phone: fields.phone,
            password: fields.password,
          })
        }
      } >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="phone" placeholder='phone' value={props.phone} disabled/>
          <ErrorMessage name="phone" component="div" className='error'/>
          <Field type="text" name="name" placeholder='name'/>
          <ErrorMessage name="name" component="div" className='error'/>
          <Field type="text" name="pubg_id" placeholder='pubg id'/>
          <ErrorMessage name="pubg_id" component="div" className='error'/>
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
          <ErrorMessage name="confirmPassword" component="div" className='error'/>
          <button type="submit" className='loginFormBtn reg' style={{background: '#26835f'}}>
            Регистрация
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

