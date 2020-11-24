import React, {useState} from 'react'

const ActivateOtp = (props) => {
  const [otp, setOtp] = useState('')
  return (
    <form className='change-form' onSubmit={(e) => {
      e.preventDefault()
      props.handleActivateOtp({
        phone: props.phone, otp
      })
    }}>
      <h2>Активационный код</h2>
      <div className='mini-title'>Ваш номер</div>
      <input type='text' name='phone' value={props.phone} disabled/>
      <div className='mini-title'>Активационный код</div>
      <input
        type='text'
        name='otp'
        placeholder='Введите ключ активации'
        value={otp}
        onChange={e => setOtp(e.target.value)}
      />
      <button type="submit" className='change-btn'>
        Активировать
      </button>
    </form>
  )
}

export default ActivateOtp