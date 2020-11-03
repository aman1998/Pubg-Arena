import React from 'react'
import { Route } from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import VisaLogo from '../../assets/icons/visa.svg'
import MasterLogo from '../../assets/icons/mastercard.svg'

const CardIn = () => {
  return (
    <Route path='/profile/cardIn' exact>
        <section className='cardIn'>
          <Formik
        initialValues={
            {
              number: '',
              month: '',
              year: '',
              cvc: '',
              sum: ''
            }
        }
        validationSchema={
            Yup.object().shape({
              number: Yup.string()
                .required('Введите номер карты'),
              month: Yup.string()
                .required('Введие дату!'),
              year: Yup.string()
                .required('Введие дату!'),
            })
        }
        // onSubmit={
          
        // }
      >
        {() => (
          <Form>
            <div className='cardIn-form'>
              <div className='icons'>
                <img src={VisaLogo} alt='#'/>
                <img src={MasterLogo} alt='#'/>
              </div>
              <Field type="text" name="number" placeholder='Номер карты' className='num'/>
              <div className='date'>
                <div>
                  <Field name="month" type="text" placeholder='ММ'/>
                  <Field type="text" name="year" placeholder='ГГ'/>
                </div>
                <Field type="text" name="cvc" placeholder='CVC'/>
              </div>
            </div>
            <div className='price'>
              <Field type="text" name="sum" placeholder='Сумма в сомах' className='sum'/>
            </div>
            <button type="submit" className='btn'>
              Пополнить
            </button>
          </Form>
        )}
      </Formik>
        </section>
    </Route>
  )
}

export default CardIn