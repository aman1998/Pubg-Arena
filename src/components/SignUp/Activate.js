import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {activateActionCreator} from "../../store/actions/modalRegister";

const Activate = (props) => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const handleActivate = (body) => {
    dispatch(activateActionCreator(body, props.showActivate, props.showReg, setError))
  }

  return (
    <form className='loginForm' onSubmit={(e) => {
      e.preventDefault()
      handleActivate({
        phone: props.phone, otp
      })
    }}>
      <input type='text' name='phone' value={props.phone} disabled/>
      <input 
        type='text' 
        name='otp' 
        placeholder='Введите ключ активации' 
        value={otp} onChange={e => setOtp(e.target.value)} 
        onFocus={() => setError(false)}
        />
      {error ? <div className='error'>Неправильный код</div> : null}
      <button type="submit" className='loginFormBtn reg'>
            Активировать
      </button>
    </form>
  )
}

export default Activate