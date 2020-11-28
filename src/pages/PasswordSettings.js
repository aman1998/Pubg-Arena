import React, {useState} from 'react'
import axios from "../axios/axios"
import {useSelector, useDispatch} from 'react-redux'

import SendPhone from "../components/User/ChangePassword/SendPhone"
import ActivateOtp from "../components/User/ChangePassword/ActivateOtp"
import ChangePassword from "../components/User/ChangePassword/ChangePassword"
import PageTemplate from "../components/templates/PageTemplate"
import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from '../store/actionTypes'

const PasswordSettings = () => {
  const [sendPhone, setSendPhone] = useState(true)
  const [activateOtp, setActivateOtp] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [success, setSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSendPhone = (body) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/reset-otp/', body)
      .then(() => {
        dispatch({ type: FETCH_SUCCESS })
        setSendPhone(false)
        setActivateOtp(true)
        setPhone(body.phone)
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED })
        console.log(e)
      })
  }
  const handleActivateOtp = (body) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/reset-otp/verify/', body)
      .then(() => {
        dispatch({ type: FETCH_SUCCESS })
        setOtp(body.otp)
        setActivateOtp(false)
        setChangePassword(true)
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED })
        console.log(e)
        setActivateOtp(true)
        setChangePassword(false)
      })
  }
  const handleChangePassword = (body) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/pass-change/', body)
      .then(() => {
        dispatch({ type: FETCH_SUCCESS })
        setChangePassword(false)
        setSuccess(true)
      })
      .catch(e => {
        console.log(e)
        dispatch({ type: FETCH_FAILED })
        setChangePassword(true)
        setSuccess(false)
      })
  }

  return(
    <PageTemplate>
      <div className='user-settings'>
        {
          sendPhone && <SendPhone handleSendPhone={handleSendPhone} error={error} setError={setError} />
        }
        {
          activateOtp && <ActivateOtp handleActivateOtp={handleActivateOtp} phone={phone} />
        }
        {
          changePassword && <ChangePassword handleChangePassword={handleChangePassword} phone={phone} otp={otp} />
        }
        {
          success && (
            <div className='change-form'>
              <h2>Поздровляем, вы изменили пароль</h2>
            </div>
          )
        }
      </div>
    </PageTemplate>
  )
}

export default PasswordSettings