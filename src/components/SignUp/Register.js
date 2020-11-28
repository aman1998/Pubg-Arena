import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"
import {fetchLoginActionCreator} from "../../store/actions/profile"
import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../../store/actionTypes"

import axios from "../../axios/axios"

const Register = (props) => {
  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const dispatch = useDispatch()

  const handleRegister = ({name, pubg_id, phone, password}) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/register/', {name, pubg_id, phone, password})
      .then(response => {
        console.log(response)
        dispatch({ type: FETCH_SUCCESS })
        dispatch(fetchLoginActionCreator({phone, password}))
        props.showRegistered(true)
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED })
      })
  }

  return (
    <Formik
      initialValues={
        {
          name: '',
          phone: props.phone,
          password: '',
          confirmPassword: '',
          acceptTerms: false
        }
      }
      validationSchema={
        Yup.object().shape({
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
          acceptTerms: Yup.bool().oneOf([true], 'Поставьте галочку!')
        })
      }
      onSubmit ={
        fields => {
          handleRegister({
            name: fields.name,
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
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
          <ErrorMessage name="confirmPassword" component="div" className='error'/>
          <div className='check-wrapper'>
            <Field type="checkbox" name="acceptTerms" className='check-input'/>
            <label htmlFor="acceptTerms" className="check">Я ознакомлен и согласен с условиями</label>
          </div>
          <ErrorMessage name="acceptTerms" component="div" className='error'/>
          <button type="submit" className='loginFormBtn reg'>
            {loading ? 
              <div className='login-loading'></div> : 
            failed ? 
              <div className='btn-error'>повторить</div> : 
              'Регистрация'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

