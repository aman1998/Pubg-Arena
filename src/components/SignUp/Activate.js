import React, {useState} from 'react'
import axios from "../../axios/axios";

const Activate = (props) => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(false)

  const handleActivate = (body) => {
    axios.post('/verify/', body)
      .then(({data}) => {
        if(data.status) {
          console.log(data)
          props.showActivate(false)
          props.showReg(true)
        }
        else {
          console.log(data)
          setError(true)
        }
      })
      .catch(e => console.log(e))
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