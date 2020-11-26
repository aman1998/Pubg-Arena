import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "../../../axios/axios"

const Register = (props) => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)
  const [error2, setError2] = React.useState(false)

  const handlePhone = (body) => {
    axios.post('/validate/', body)
      .then(({data}) => {
        console.log(data)
        if (data.status) {
          props.getPhone(body.phone)
          props.showActivate(true)
          props.showPhone(false)
        }
        else {
          setError2(true)
        }
        
      })
      .catch(e => console.log(e))
  }

  const sendPhone = (e) => {
    e.preventDefault()
    if (phone) {
      handlePhone({phone})
      console.log(phone)
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

