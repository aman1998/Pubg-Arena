import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const ChangePassword = (props) => {

  return (
    <Formik
      initialValues={
        {
          phone: props.phone,
          otp: props.otp,
          password: ''
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
          props.handleChangePassword({
            phone: fields.phone,
            password: fields.password,
            otp: fields.otp
          })
        }
      }>
      {() => (
        <Form className='change-password'>
          <h2>Изменить пароль</h2>
          <div className='mini-title'>Ваш номер</div>
          <Field type="text" name="phone" placeholder='phone' value={props.phone} disabled/>
          <ErrorMessage name="phone" component="div" className='error'/>
          <div className='mini-title'>Активационный код</div>
          <Field type="text" name="otp" placeholder='активационный код' value={props.otp} disabled/>
          <ErrorMessage name="otp" component="div" className='error'/>
          <div className='mini-title'>Новый пароль</div>
          <Field type="password" name="password" placeholder='Пароль'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <button type="submit" className='change-btn'>
            Изменить
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword