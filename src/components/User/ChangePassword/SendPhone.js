import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const SendPhone = (props) => {
  return (
    <Formik
      initialValues={
        {
          phone: ''
        }
      }
      validationSchema={
        Yup.object().shape({
          phone: Yup.number('Введите номер!')
            .required('Заполинте поле!')
        })
      }
      onSubmit={
        fields => {
          props.handleSendPhone(fields)
        }
      }
    >
      {() => (
        <Form className='change-form'>
          <h2>Отправить код на номер</h2>
          <div className='mini-title'>Ваш номер</div>
          <Field type="text" name="phone" placeholder='номер телефона' />
          <ErrorMessage name="phone" component="div" className='error'/>
          <button type="submit" className='change-btn'>
            Далее
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default SendPhone