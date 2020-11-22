import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const UserSettings = (props) => {
  const handleChange = () => {

  }
  return(
    <div className='user-settings'>
      <Formik
        initialValues={
          {
            name: props.name,
            phone: props.phone,
            pastPassword: '',
            newPassword: '',
          }
        }
        validationSchema={
          Yup.object().shape({
            name: Yup.string()
              .required('Введите свой никнейм'),
            phone: Yup.string()
              .required('Введите номер телефона!'),
            pastPassword: Yup.string()
              .min(6, 'Минимум 6 символов')
              .required('Введите пароль!'),
            newPassword: Yup.string()
              .required('Подтвердите пароль'),
          })
        }
        onSubmit ={
          fields => {
            handleChange({
              name: fields.name,
              phone: fields.phone,
              newPassword: fields.newPassword,
            })
          }
        } >
        {() => (
          <Form className='change-form'>
            <h3>Настройки аккаунта</h3>
            <div className='mini-title'>Изменить номер телефона</div>
            <Field
              type="text"
              name="phone"
              placeholder='phone'
              value={props.phone}
              className='input'
              disabled
            />
            <ErrorMessage name="phone" component="div" className='error'/>
            <div className='mini-title'>Изменить имя</div>
            <Field
              type="text"
              name="name"
              placeholder='никнейм'
              className='input'
              value={props.name}
            />
            <ErrorMessage name="name" component="div" className='error'/>
            <div className='mini-title'>Старый пароль</div>
            <Field
              type="password"
              name="pastPassword"
              className='input'
              placeholder='Пароль'
            />
            <ErrorMessage name="pastPassword" component="div" className='error'/>
            <div className='mini-title'>Новый пароль</div>
            <Field
              type="password"
              name="newPassword"
              placeholder='Повторите пароль'
              className='input'
            />
            <ErrorMessage name="newPassword" component="div" className='error'/>
            <button type="submit" className='change-btn'>
              Изменить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UserSettings