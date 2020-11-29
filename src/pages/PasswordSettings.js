import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import SendPhone from "../components/User/ChangePassword/SendPhone"
import ActivateOtp from "../components/User/ChangePassword/ActivateOtp"
import ChangePassword from "../components/User/ChangePassword/ChangePassword"
import PageTemplate from "../components/templates/PageTemplate"

import {
  activateOtpActionCreator,
  changePasswordActionCreator,
  sendPhoneActionCreator
} from "../store/actions/changePassword"

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
    dispatch(sendPhoneActionCreator(body, setSendPhone, setActivateOtp, setPhone))
  }
  const handleActivateOtp = (body) => {
    dispatch(activateOtpActionCreator(body, setOtp, setActivateOtp, setChangePassword))
  }
  const handleChangePassword = (body) => {
    dispatch(changePasswordActionCreator(body, setChangePassword, setSuccess))
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