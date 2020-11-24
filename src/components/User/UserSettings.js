import React, {useState} from 'react'
import axios from "../../axios/axios"
import {useSelector} from "react-redux"

import SendPhone from "./ChangePassword/SendPhone"
import ActivateOtp from "./ChangePassword/ActivateOtp"
import ChangePassword from "./ChangePassword/ChangePassword"

const UserSettings = () => {
  const myProfile = useSelector(state => state.profile.myProfile)
  const [sendPhone, setSendPhone] = useState(true)
  const [activateOtp, setActivateOtp] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [success, setSuccess] = useState(false)
  const [otp, setOtp] = useState('')

  const handleSendPhone = (body) => {
    axios.post('/reset-otp/', body)
      .then(response => {
        console.log(response)
        setSendPhone(false)
        setActivateOtp(true)
      })
      .catch(e => console.log(e))
  }
  const handleActivateOtp = (body) => {
    axios.post('/reset-otp/verify/', body)
      .then(response => {
        setOtp(body.otp)
        console.log(response)
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
      .then(response => {
        console.log(body)
        console.log(response)
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
    <div className='user-settings'>
      {
        sendPhone && <SendPhone handleSendPhone={handleSendPhone} phone={myProfile.phone} />
      }
      {
        activateOtp && <ActivateOtp handleActivateOtp={handleActivateOtp} phone={myProfile.phone} />
      }
      {
        changePassword && <ChangePassword handleChangePassword={handleChangePassword} phone={myProfile.phone} otp={otp} />
      }
      {
        success && (
          <div className='change-form'>
            <h2>Поздровляем, вы изменили пароль</h2>
          </div>
        )
      }
    </div>
  )
}

export default UserSettings