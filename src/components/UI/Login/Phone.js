import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "../../../axios/axios"
import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_LOADING
} from "../../../store/actionTypes"
import {useDispatch, useSelector} from 'react-redux'

const Register = (props) => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)
  const [error2, setError2] = React.useState(false)

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const dispatch = useDispatch()

  const handlePhone = (body) => {
    dispatch({ type: FETCH_LOADING })
    axios.post('/validate/', body)
      .then(({data}) => {
        console.log(data)
        if (data.status) {
          dispatch({ type: FETCH_SUCCESS })
          props.getPhone(body.phone)
          props.showActivate(true)
          props.showPhone(false)
        }
        else {
          dispatch({ type: FETCH_FAILED})
          setError2(true)
        }
        
      })
      .catch(e => {
        dispatch({ type: FETCH_FAILED})
      })
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
      <button onClick={sendPhone}  className='loginFormBtn reg'>
      {loading ? 
        <div className='login-loading'></div> : 
      failed ? 
        <div className='btn-error'>повторить</div> : 
        'Отправить'}
      </button>
    </form>
  )
}

export default Register

