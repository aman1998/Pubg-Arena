import React, {useState} from 'react'

const Activate = (props) => {
  const [otp, setOtp] = useState('')

  return (
    <form className='loginForm' onSubmit={(e) => {
      e.preventDefault()
      props.handleActivate({
        phone: props.phone, otp
      })
    }}>
      <input type='text' name='phone' value={props.phone} disabled/>
      <input type='text' name='otp' placeholder='Введите ключ активации' value={otp} onChange={e => setOtp(e.target.value)} />
      <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Активировать
      </button>
    </form>
  )
}

export default Activate