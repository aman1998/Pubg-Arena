import React, {useState} from 'react'
import axios from "../axios/axios"

import SendPhone from "../components/User/ChangePassword/SendPhone"
import ActivateOtp from "../components/User/ChangePassword/ActivateOtp"
import ChangePassword from "../components/User/ChangePassword/ChangePassword"
import PageTemplate from "../components/templates/PageTemplate";

const PasswordSettings = () => {
  const [sendPhone, setSendPhone] = useState(true)
  const [activateOtp, setActivateOtp] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [success, setSuccess] = useState(false)
  const [otp, setOtp] = useState('')
  const [phone, setPhone] = useState('')

  const handleSendPhone = (body) => {
    axios.post('/reset-otp/', body)
      .then(() => {
        setSendPhone(false)
        setActivateOtp(true)
        setPhone(body.phone)
      })
      .catch(e => console.log(e))
  }
  const handleActivateOtp = (body) => {
    axios.post('/reset-otp/verify/', body)
      .then(() => {
        setOtp(body.otp)
        setActivateOtp(false)
        setChangePassword(true)
      })
      .catch(e => {
        console.log(e)
        setActivateOtp(true)
        setChangePassword(false)
      })
  }
  const handleChangePassword = (body) => {
    axios.post('/pass-change/', body)
      .then(() => {
        setChangePassword(false)
        setSuccess(true)
      })
      .catch(e => {
        console.log(e)
        setChangePassword(true)
        setSuccess(false)
      })
  }

  return(
    <PageTemplate>
      <div className='user-settings'>
        {
          sendPhone && <SendPhone handleSendPhone={handleSendPhone} />
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