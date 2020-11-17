import React, {useState} from 'react'
import Register from './Register'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";
import axios from "../../../axios/axios";

const RegTemplate = () => {
  const [phone, setPhone] = React.useState('')
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const [showRegisterContainer, setShowRegisterContainer] = useState(false)
  const dispatch = useDispatch()

  const handlePhone = (body) => {
    axios.post('/validate/', body)
      .then(() => {
        setPhone(body.phone)
        setShowActivate(true)
        setShowPhone(false)
      })
      .catch(e => console.log(e))
      // setPhone(body.phone)
      // setShowActivate(true)
      // setShowPhone(false)
  }

  const handleActivate = (body) => {
    axios.post('/verify/', body)
      .then((response) => {
        console.log('res', response)
        if(response.data.details !== 'OTP incorrect, please try again' && 
        response.data.details !== 'Phone not recognised. Kindly request a new otp with this number'
        ) {
          setShowActivate(false)
          setShowRegisterContainer(true)
        }
      })
      .catch(e => console.log(e))
  }

  const dispatchShowRegister = () => {
    dispatch(showRegister())
  }

  return (
    <div className='login'>
      <Header title='Регистрация' class='reg' close={dispatchShowRegister}/>
      {
        showPhone ? (
          <Phone handlePhone={handlePhone}/>
        ) : showActivate ? (
          <Activate handleActivate={handleActivate} phone={phone}/>
        ) : showRegisterContainer ?
          <Register phone={phone}/> : null
      }
    </div>
  )
}

export default RegTemplate

