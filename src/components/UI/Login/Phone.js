import React, {useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useDispatch, useSelector} from 'react-redux'
import {handlePhoneActionCreator} from "../../../store/actions/profile";
import { FETCH_RESET } from '../../../store/actionTypes'

const Register = (props) => {
  const [phone, setPhone] = React.useState('')
  const [error, setError] = React.useState(false)
  const [error2, setError2] = React.useState(false)
  const dispatch = useDispatch()

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  useEffect(() => {
    if(failed) {
      dispatch({ type: FETCH_RESET })
    }
  }, [])

  const handlePhone = (body) => {
    dispatch(handlePhoneActionCreator(body, props.getPhone, props.showActivate, props.showPhone, setError2))
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
        placeholder={props.placeholder}
        value={phone}
        onChange={setPhone}
        onFocus={removeError}
      />
      {error ?  <div className='error'>{props.errorInput}</div> : null}
      {error2 ? <div className='error'>{props.validate}</div> : null}
      <button onClick={sendPhone}  className='loginFormBtn reg'>
      {loading ?
        <div className='login-loading'></div> :
      failed ?
        <div className='btn-error'>{props.errorBtn}</div> :
        props.btn}
      </button>
    </form>
  )
}

export default Register

