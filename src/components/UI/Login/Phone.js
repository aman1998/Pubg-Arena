import React from 'react'
import 'react-phone-input-2/lib/style.css'
import {useDispatch} from "react-redux"

import PhoneInput from 'react-phone-input-2'
import {handlePhoneActionCreator} from "../../../store/actions/profile";

const Register = (props) => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)
  const [error2, setError2] = React.useState(false)
  const dispatch = useDispatch()

  const handlePhone = (body) => {
    dispatch(handlePhoneActionCreator(body, props.getPhone, props.showActivate, props.showPhone, setError2))
  }

  const sendPhone = (e) => {
    e.preventDefault()
    if (phone) {
      handlePhone({phone})
    }
    else {
      setError(true)
    }
  }

  const removeError = () => {
    setError(false)
    setError2(false)
  }

  return (
    <form>
      <PhoneInput
        country='kg'
        onlyCountries={['kg']}
        disableDropdown
        containerClass='phone'
        placeholder="Введите свой номер"
        value={phone}
        onChange={setPhone}
        onFocus={removeError}
      />
      {error ?  <div className='error'>Ошибка ввода</div> : null}
      {error2 ? <div className='error'>Этот номер уже зарегистирован</div> : null}
      <button onClick={sendPhone}  className='loginFormBtn reg'>Отправить</button>
    </form>
  )
}

export default Register

