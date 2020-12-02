import React from 'react'
import {useSelector} from 'react-redux'
import PhoneInput from 'react-phone-input-2'


const SendPhone = (props) => {
  const [phone, setPhone] = React.useState('')

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const removeError = () => {
    props.setError(false)
  }

  const handleSendPhone = (e) => {
    e.preventDefault()
    if (phone) {
      props.handleSendPhone({phone})
    }
    else {
      props.setError(true)
    }
  }

  return (
    <form className='change-pass'>
      <div className='change-text'>Введите свой номер телефона для восстановления пароля</div>
      <PhoneInput
        country='kg'
        onlyCountries={['kg', 'ru', 'kz', 'tr' ]}
        containerClass='phone'
        placeholder="Введите свой номер"
        value={phone}
        onChange={setPhone}
        onFocus={removeError}
      />
      {props.error ? <div className='error'>Ошибка ввода</div> : null}
      <button onClick={handleSendPhone}  className='change-btn'>
      {loading ? 
        <div className='login-loading'></div> : 
      failed ? 
        <div className='btn-error'>повторить</div> : 
        'Отправить'}
      </button>
    </form>
  )
}

export default SendPhone