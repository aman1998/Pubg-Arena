import React, {useState} from 'react'

const Activate = (props) => {
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
  return (
    <form className='loginForm' onSubmit={() => props.handleActivate({
        phone, otp
    })}>
      <input type='text' name='phone' value={props.phone} disabled/>
      <input type='text' name='otp' placeholder='Введите ключ активации' value={otp} onChange={e => setOtp(e.target.value)} />
      <button type="submit" className='loginFormBtn reg'>
            Активировать
      </button>
    </form>
  )
}

export default Activate