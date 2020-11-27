import React, {useState} from 'react'
import Register from './Register'
import Phone from '../UI/Login/Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import axios from "../../axios/axios"
import Header from './Header'

const RegTemplate = () => {
  const [phone, getPhone] = React.useState('')
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const [showRegisterContainer, setShowRegisterContainer] = useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='signUp'>
      <Header title='Регистрация' />
      {
        showPhone ? (
          <Phone 
            getPhone={getPhone}
            showActivate={ setShowActivate}
            showPhone={setShowPhone}
            />
        ) : showActivate ? (
          <Activate  
            phone={phone}
            showActivate={setShowActivate}
            showReg={setShowRegisterContainer}
            />
        ) : showRegisterContainer ?
          <Register phone={phone}/> : null
      }
    </div>
  )
}

export default RegTemplate

