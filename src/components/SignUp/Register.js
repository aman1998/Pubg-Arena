import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"
import {registerActionCreator} from "../../store/actions/modalRegister";

const Register = (props) => {
  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const dispatch = useDispatch()

  const handleRegister = ({name, pubg_id, phone, password}) => {
    dispatch(registerActionCreator({name, pubg_id, phone, password}, props.showRegistered))
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
            .required(props.nickValidate),
          phone: Yup.string()
            .required(props.phoneValidate),
          password: Yup.string()
            .min(6, props.passValidate)
            .required(props.phoneValidate2),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], props.phoneValidate3)
            .required(props.phoneValidate4),
          acceptTerms: Yup.bool().oneOf([true], props.checkValidate)
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
          <Field type="text" name="name" placeholder='account name from PUBG Mobile'/>
          <ErrorMessage name="name" component="div" className='error'/>
          <Field type="password" name="password" placeholder='password'/>
          <ErrorMessage name="password" component="div" className='error'/>
          <Field type="password" name="confirmPassword" placeholder='repeat password'/>
          <ErrorMessage name="confirmPassword" component="div" className='error'/>
          <div className='check-wrapper'>
            <Field type="checkbox" name="acceptTerms" className='check-input'/>
            <label htmlFor="acceptTerms" className="check">{props.accept}</label>
          </div>
          <ErrorMessage name="acceptTerms" component="div" className='error'/>
          <button type="submit" className='loginFormBtn reg'>
            {loading ? 
              <div className='login-loading'></div> : 
            failed ? 
              <div className='btn-error'>{props.errorBtn}</div> : 
              props.btn}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Register

