import React from 'react'
import {Route} from 'react-router-dom'

import payIcon from '../../assets/icons/pay-24.svg'

const CardIn = () => {
  return (
    <Route path='/profile/cardIn' exact>
      <section className='cardIn'>
        <h2>Пополнение счета</h2>
        <div className='text'>
          <p className='important'>Расширяем горизонты заработков для своих клиентов!</p>
          <p>Теперь вы можете пополнять счета и зарабатывать играя просто в свою любимую игру.</p>

          <p>Сеть платежных терминалов Pay24 насчитывает уже более 3 000 по всей стране.</p>

          <p className='important'>Для пополнения счета вам необходимо найти:</p>
          <div className='important-items'>
            <p>- банковские и финансовые услуги;</p>
            <p>- пополнение счета;</p>
            <p>- введите номер телефона, привязанного к счету;</p>
            <p>- внесите необходимую сумму в купюроприемник.</p>
          </div>

          <p className='important'>Легко и быстро!</p>

          <p>Arena Games - играй и зарабатывай!</p>

          <p>Для участия в играх, вы можете пополнить баланс в терминалах.</p>
        </div>
        <div className='cardInIcons'>
					{/* <img src={payIcon} alt='Pay24' />
          <img src={payIcon} alt='Pay24' />
          <img src={payIcon} alt='Pay24' />
					<img src={payIcon} alt='Pay24' /> */}
        </div>
        {/*<Formik*/}
        {/*  initialValues={*/}
        {/*    {*/}
        {/*      number: '',*/}
        {/*      month: '',*/}
        {/*      year: '',*/}
        {/*      cvc: '',*/}
        {/*      sum: ''*/}
        {/*    }*/}
        {/*  }*/}
        {/*  validationSchema={*/}
        {/*    Yup.object().shape({*/}
        {/*      number: Yup.string()*/}
        {/*        .required('Введите номер карты'),*/}
        {/*      month: Yup.string()*/}
        {/*        .required('Введие дату!'),*/}
        {/*      year: Yup.string()*/}
        {/*        .required('Введие дату!'),*/}
        {/*    })*/}
        {/*  }*/}
        {/*  // onSubmit={*/}

        {/*  // }*/}
        {/*>*/}
        {/*  {() => (*/}
        {/*    <Form>*/}
        {/*      <div className='cardIn-form'>*/}
        {/*        <div className='icons'>*/}
        {/*          <img src={VisaLogo} alt='#'/>*/}
        {/*          <img src={MasterLogo} alt='#'/>*/}
        {/*        </div>*/}
        {/*        <Field type="text" name="number" placeholder='Номер карты' className='num'/>*/}
        {/*        <div className='date'>*/}
        {/*          <div>*/}
        {/*            <Field name="month" type="text" placeholder='ММ'/>*/}
        {/*            <Field type="text" name="year" placeholder='ГГ'/>*/}
        {/*          </div>*/}
        {/*          <Field type="text" name="cvc" placeholder='CVC'/>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className='price'>*/}
        {/*        <Field type="text" name="sum" placeholder='Сумма в сомах' className='sum'/>*/}
        {/*      </div>*/}
        {/*      <button type="submit" className='btn'>*/}
        {/*        Пополнить*/}
        {/*      </button>*/}
        {/*    </Form>*/}
        {/*  )}*/}
        {/*</Formik>*/}
      </section>
    </Route>
  )
}

export default CardIn
