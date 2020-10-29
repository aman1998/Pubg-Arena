import React  from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from './Header'

const Login = (props) => {

  return (
    <div className='login'>
      <Header title={props.title} bg={props.bg} close={props.close}/>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        validate={values => {
          const errors = {};
          if (!values.email || !values.password || !values.name) {
            errors.email = 'Это поле обязательно!';
            errors.password = 'Введите свой пароль!';
            errors.name = 'Введите свой никнейм!';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) 
            // &&
            // !values.password.length < 3 && values.password.length >= 10 
          ) {
            errors.email = 'Неправильный формат';
            // errors.password = 'Пароль должен быть включать 4-10 символов';
            // errors.name = 'Имя должно быть включать 4-10 символов';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <Field type="text" name="name" placeholder='Никнейм'/>
            <ErrorMessage name="name" component="div" className='error'/>
            <Field type="password" name="password" placeholder='Пароль'/>
            <ErrorMessage name="password" component="div" className='error'/>
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
