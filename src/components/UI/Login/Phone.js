import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = (props) => {
  // process number into string with area code for submission
  const processNumber = (isValid, phone) => {
    return `+${996} ${phone}`;
  };

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
          props.handlePhone(fields)
        }
      }
    >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="phone" placeholder='phone' />
          <ErrorMessage name="phone" component="div" className='error'/>
          <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Далее
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

