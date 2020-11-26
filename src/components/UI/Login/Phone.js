import React from 'react'
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Register = (props) => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)

  const sendPhone = (e) => {
    e.preventDefault()
    if (phone) {
      props.handlePhone({phone})
      console.log(phone)
    }
    else {
      setError(true)
    }
  }

  return (
    <form>
      <PhoneInput
        country='kg'
        onlyCountries={['kg', 'kz', 'ru']}
        // disableDropdown
        containerClass='phone'
        placeholder="Введите свой номер"
        value={phone}
        onChange={setPhone}
        onFocus={() => setError(false)}
      />
      {error ?  <div className='error'>Ошибка ввода</div> : null}
      <button onClick={sendPhone}  className='loginFormBtn reg'>Отправить</button>
    </form>
  )
}

export default Register

