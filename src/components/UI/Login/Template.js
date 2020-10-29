import React  from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from './Header'
import * as Yup from 'yup';

const Login = (props) => {

  return (
    <div className='login'>
      <Header title={props.title} bg={props.bg} close={props.close}/>
      <Formik
        initialValues={{ 
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
              .required('Title is required'),
          login: Yup.string()
              .required('Введите никнейм!'),
          email: Yup.string()
              .email('Неверный формат')
              .required('Введите почту'),
          password: Yup.string()
              .min(6, 'В пароле должно быть минимум 6 символов!')
              .required('Введите пароль!'),
          confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Пароли не совпадают!')
              .required('Подтвердите пароль!'),
      })}
      onSubmit={fields => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
    }}
      >
        {({ isSubmitting }) => (
          <Form className='loginForm'>
            {props.title == 'Регистрация' ? 
              <div>
                <Field type="email" name="email" placeholder='Почта'/>
                <ErrorMessage name="email" component="div" className='error'/>
              </div>
              : ''
            }
            <Field type="text" name="login" placeholder='Никнейм'/>
            <ErrorMessage name="login" component="div" className='error'/>
            <Field type="password" name="password" placeholder='Пароль'/>
            <ErrorMessage name="password" component="div" className='error'/>
            <Field type="password" name="confirmPassword" placeholder='Повторите пароль'/>
            <ErrorMessage name="confirmPassword" component="div" className='error'/>
            <button type="submit" disabled={isSubmitting} className='loginFormBtn' style={{background: props.bg}}>
              {props.title}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
