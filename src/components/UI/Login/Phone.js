import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = (props) => {
  const [telephoneValid, setTelephoneValid] = React.useState(true);

  const setValidity = valid => {
    setTelephoneValid(valid);
  };
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
          console.log(fields)
        }
      }
    >
      {() => (
        <Form className='loginForm'>
          <Field type="text" name="phone" placeholder='phone' />
          <ErrorMessage name="phone" component="div" className='error'/>
          <button type="submit" className='loginFormBtn reg'>
            Далее
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

