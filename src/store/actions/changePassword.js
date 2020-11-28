import axios from "../../axios/axios";

export const sendPhoneActionCreator = (body, setSendPhone, setActivateOtp, setPhone) => () => {
  axios.post('/reset-otp/', body)
    .then(() => {
      setSendPhone(false)
      setActivateOtp(true)
      setPhone(body.phone)
    })
    .catch(e => console.log(e))
}

export const activateOtpActionCreator = (body, setOtp, setActivateOtp, setChangePassword) => () => {
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

export const changePasswordActionCreator = (body, setChangePassword, setSuccess) => () => {
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