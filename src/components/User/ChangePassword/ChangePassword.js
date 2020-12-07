import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import { useTranslation } from 'react-i18next'

const ChangePassword = (props) => {
  const { t } = useTranslation();

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
            .required(t('validate.7')),
          password: Yup.string()
            .min(6, t('validate.5'))
            .required(t('validate.6')),
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
          <h2>{t('Profile.settings.5')}</h2>
          <div className='mini-title'>{t('Validate.7')}</div>
          <Field type="text" name="phone" placeholder='phone' value={props.phone} disabled/>
          <ErrorMessage name="phone" component="div" className='error'/>
          <div className='mini-title'>{t('Placeholder.1')}</div>
          <Field type="text" name="otp" placeholder={t('Placeholder.1')} value={props.otp} disabled/>
          <ErrorMessage name="otp" component="div" className='error'/>
          <div className='mini-title'>{t('Profile.settings.8')}</div>
          <Field type="password" name="password" placeholder={t('Placeholder.3')}/>
          <ErrorMessage name="password" component="div" className='error'/>
          <button type="submit" className='change-btn'>
            {t('Profile.settings.6')}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword