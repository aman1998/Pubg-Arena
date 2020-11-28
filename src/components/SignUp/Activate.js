import React, {useState} from 'react'
import axios from "../../axios/axios"
import {useDispatch, useSelector} from 'react-redux'
import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../../store/actionTypes"

const Activate = (props) => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState(false)

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const dispatch = useDispatch()

  const handleActivate = (body) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/verify/', body)
      .then(({data}) => {
        if(data.status) {
          dispatch({ type: FETCH_SUCCESS})
          console.log(data)
          props.showActivate(false)
          props.showReg(true)
        }
        else {
          console.log(data)
          setError(true)
          dispatch({ type: FETCH_FAILED})
        }
      })
      .catch(e => {
        setError(true)
        dispatch({ type: FETCH_FAILED})
      })
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
      {loading ? 
        <div className='login-loading'></div> : 
      failed ? 
        <div className='btn-error'>повторить</div> : 
        'Активировать'}
      </button>
    </form>
  )
}

export default Activate