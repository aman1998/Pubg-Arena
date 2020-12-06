import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {activateActionCreator} from "../../store/actions/modalRegister"

const Activate = (props) => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(false)

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

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
        placeholder={props.placeholder} 
        value={otp} onChange={e => setOtp(e.target.value)} 
        onFocus={() => setError(false)}
        />
      {error ? <div className='error'>{props.errorInput}</div> : null}
      <button type="submit" className='loginFormBtn reg'>
      {loading ? 
        <div className='login-loading'></div> : 
      failed ? 
        <div className='btn-error'>{props.errorBtn}</div> : 
        props.btn}
      </button>
    </form>
  )
}

export default Activate