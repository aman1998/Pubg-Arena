import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import {
  handlePay24ActionCreator,
  handleElsomActionCreator,
  handleBalanceActionCreator,
  handlePhoneActionCreator
} from '../../store/actions/card'

import payIcon from '../../assets/img/pay24.jpg'
import balanceIcon from '../../assets/img/balance.jpg'
import elsomIcon from '../../assets/img/elsom.jpeg'
import megacomIcon from '../../assets/img/megacom.jpg'
import oIcon from '../../assets/img/oshka.png'
import beelineIcon from '../../assets/img/beeline.jpg'

import Popup from '../UI/Money'


import {useTranslation} from 'react-i18next';
import { TrendingUpRounded } from '@material-ui/icons'

const CardOut = () => {
  const {success, failed, loading, profile} = useSelector(state => ({
    profile: state.profile.myProfile,
    loading: state.card.post.loading,
    success: state.card.post.success,
    failed: state.card.post.failed
  }))

  const {t} = useTranslation();

  const [radio, setRadio] = useState('pay24')
  const [value, setValue] = useState(0)
  const [commission, setCommission] = useState('12%')
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)
  const [popup, setPopup] = useState(false)
  const [wallet, setWallet] = useState('')
  const [money, setMoney] = useState('')
  const [operator, setOperator] = useState('O!')

  const dispatch = useDispatch()

  const handleSum = () => {
    if (value >= 100) {
      if (radio === 'pay24') {
        dispatch(handlePay24ActionCreator(value, commission))
      } else if (radio === 'elsom') {
        dispatch(handleElsomActionCreator(value, commission))
      } else if (radio === 'balance') {
        dispatch(handleBalanceActionCreator(value, commission))
      }
    } else {
      setError(true)
    }
  }

  const handleSend = () => {
    if(money >= 100) {
      dispatch(handlePhoneActionCreator(money, profile.phone, wallet, operator, setPopup))
      console.log(money, profile.phone, wallet, operator)
    }
    else {
      setError2(true)
    }
  }

  const closePopup = () => {
    setPopup(false)
  }

  return (
    <section className='cardOut'>
      {popup ? 
        <Popup 
          close = {closePopup}
          show = {popup}
        /> :
        null  
      }
      <section className='warningCard'>{t('Profile.cardOut.13')}</section>
      <p className='warningCardTwo'>{t('Profile.cardOut.11')}</p>
      <p className='balance-warning'>{t('Profile.cardOut.12')}</p>
      <input name='phone' type='hidden' value={profile.phone}/>
          <PhoneInput
            country='kg'
            onlyCountries={['kg']}
            disableDropdown
            containerClass='phone'
            name='wallet' 
            value={wallet}
            onChange={setWallet}
          />
        <input 
          name='money' 
          type='number' 
          value={money} 
          placeholder='Сумма' 
          className='sum'
          onChange={(e) => setMoney(e.target.value)
          }/>
        {error2 ? <div className='error'>{t('Profile.cardOut.10')}</div> : null}
      <form className='form operator'>
        <div className='form-item'>
          <img src={oIcon} alt='O!' className='phone-icon'/>
          <div className='radio'>
            <input 
              type='radio'
              checked={operator === 'O!'}
              value='O!'
              onChange={e => {
                setOperator(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='form-item'>
          <img src={megacomIcon} alt='Megacom' className='phone-icon'/>
          <div className='radio'>
            <input 
              type='radio'
              checked={operator === 'megacom'}
              value='megacom'
              onChange={e => {
                setOperator(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='form-item'>
          <img src={beelineIcon} alt='beeline' className='phone-icon'/>
          <div className='radio'>
            <input 
              type='radio'
              checked={operator === 'balance'}
              value='balance'
              onChange={e => {
                setOperator(e.target.value)
              }}
            />
          </div>
        </div>
      </form>
      <button className='cardOut-btn' onClick={handleSend}>
      { loading ? 
        <div className='login-loading'></div> : 
        failed ? 
        <div className='btn-error'>{t('Login.btns.5')}</div> : t('Profile.cardOut.9')}
      </button>
      {/*<form action="https://merchant.intellectmoney.ru/ru/" name="pay" method="POST">*/}
      {/*  <input type="hidden" name="eshopId" readOnly={true} value="459141"/>*/}
      {/*  <input type="hidden" name="orderId" readOnly={true} value="order_0000001"/>*/}
      {/*  <input type="hidden" name="serviceName" readOnly={true} value="Arenagames"/>*/}
      {/*  <input type="number" name="recipientAmount"/>*/}
      {/*  <input type="hidden" name="recipientCurrency" readOnly={true} value="TST"/>*/}
      {/*  <input type="text" name="user_email" readOnly={true} value="test@test.ru"/>*/}
      {/*  <input type="text" name="user_phone" readOnly={true} value="+996703411547"/>*/}
      {/*  <input type="hidden" name="successUrl" readOnly={true} value="https://google.com"/>*/}
      {/*  <input type="hidden" name="failUrl" readOnly={true} value="https://youtube.com"/>*/}
      {/*  <input type="hidden" name="expireDate" readOnly={true} value="12/17/2020 23:37:00"/>*/}
      {/*  <input*/}
      {/*    type="hidden"*/}
      {/*    name="merchantReceipt"*/}
      {/*    readOnly={true}*/}
      {/*    value='{*/}
      {/*      "inn":"7704019762",*/}
      {/*      "group":"Main",*/}
      {/*      "content":{*/}
      {/*        "type":1,*/}
      {/*        "positions":[*/}
      {/*          {*/}
      {/*            "quantity":2.000,*/}
      {/*            "price":12.45,*/}
      {/*            "tax":6,*/}
      {/*            "text":"Булка"*/}
      {/*          },*/}
      {/*          {*/}
      {/*            "quantity":1.000,*/}
      {/*            "price":5.10,*/}
      {/*            "tax":4,*/}
      {/*            "text":"Спички"*/}
      {/*          }*/}
      {/*        ],*/}
      {/*        "customerContact":"foo@example.com"*/}
      {/*      }*/}
      {/*    }'*/}
      {/*  />*/}
      {/*  <input type="text" name="UserField_1"/>*/}
      {/*  <input type="text" name="UserField_2"/>*/}
      {/*  <input type="hidden" name="UserFieldName_2" value="Param name for value_2"/>*/}
      {/*  <input type="submit" name="button" value="оплатить"/>*/}
      {/*</form>*/}
      {/*<script></script>*/}
      {/*//         <h2>{t('Profile.cardOut.1')}</h2>*/}
      {/*//         <div className='text'>*/}
      {/*//           <div>{t('Profile.cardOut.2')}:</div>*/}
      {/*//           <ul>*/}
      {/*//             <li>{t('Profile.cardOut.3')}</li>*/}
      {/*//             <li>{t('Profile.cardOut.4')}</li>*/}
      {/*//             <li>{t('Profile.cardOut.5')}</li>*/}
      {/*//           </ul>*/}
      {/*//           <div>{t('Profile.cardOut.6')}</div>*/}
      {/*//         </div>*/}
      {/*//         <form className='form'>*/}
      {/*//           <div className='form-item'> */}
      {/*//             <img src={payIcon} alt='pay24' className='icon'/>*/}
      {/*//             <div className='radio'>*/}
      {/*//               <input */}
      {/*//                 type='radio'*/}
      {/*//                 checked={radio === 'pay24'}*/}
      {/*//                 value='pay24'*/}
      {/*//                 onChange={e => {*/}
      {/*//                   setRadio(e.target.value)*/}
      {/*//                   setCommission('12%')*/}
      {/*//                 }}*/}
      {/*//               />*/}
      {/*//             </div>*/}
      {/*//           </div>*/}
      {/*//           <div className='form-item'>*/}
      {/*//             <img src={elsomIcon} alt='pay24' className='icon'/>*/}
      {/*//             <div className='radio'>*/}
      {/*//               <input */}
      {/*//                 type='radio'*/}
      {/*//                 checked={radio === 'elsom'}*/}
      {/*//                 value='elsom'*/}
      {/*//                 onChange={e => {*/}
      {/*//                   setRadio(e.target.value)*/}
      {/*//                   setCommission('8%')*/}
      {/*//                 }}*/}
      {/*//               />*/}
      {/*//             </div>*/}
      {/*//           </div>*/}
      {/*//           <div className='form-item'>*/}
      {/*//             <img src={balanceIcon} alt='pay24' className='icon'/>*/}
      {/*//             <div className='radio'>*/}
      {/*//               <input */}
      {/*//                 type='radio'*/}
      {/*//                 checked={radio === 'balance'}*/}
      {/*//                 value='balance'*/}
      {/*//                 onChange={e => {*/}
      {/*//                   setRadio(e.target.value)*/}
      {/*//                   setCommission('6%')*/}
      {/*//                 }}*/}
      {/*//               />*/}
      {/*//             </div>*/}
      {/*//           </div>*/}
      {/*//         </form>*/}
      {/*//         <div className='commission'>{t('Profile.cardOut.7')}: {commission}</div>*/}
      {/*//         <input */}
      {/*//           type='number' */}
      {/*//           placeholder={t('Profile.cardOut.8')} */}
      {/*//           className='sum'*/}
      {/*//           onChange={e => setValue(e.target.value)}*/}
      {/*//           onFocus={() => setError(false)}*/}
      {/*//           />*/}
      {/*//         {error ? <div className='error'>{t('Profile.cardOut.10')}</div> : null}*/}
      {/*//         <button className='cardOut-btn' onClick={handleSum}>*/}
      {/*//         { loading ? */}
      {/*//           <div className='login-loading'></div> : */}
      {/*//           failed ? */}
      {/*//           <div className='btn-error'>{t('Login.btns.5')}</div> : t('Profile.cardOut.9')}*/}
      {/*//         </button>*/}
    </section>
  )
}

export default CardOut