import React from 'react'
import Registr from './Registr'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";
import {hideState, showState} from "../../../store/actions/isAuthState";

const ENDPOINT = 'http://localhost:8000'

const RegTemplate = (props) => {
  const [phone, setPhone] = React.useState('')
  const [showRegistr, setShowReg] = React.useState(false)
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const dispatch = useDispatch()

  const showReg = () => {
    dispatch(showRegister())
    }

    const handlePhone = (body) => {
      console.log(body)
      setShowPhone(false)
      setShowActivate(true)
      setPhone(body.phone)
      dispatch(showState())
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
      // fetch(`${ENDPOINT}/validate/`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(body),
      // })
      //   // .then((response) => {
      //   //   if (!response.ok) throw response.status
      //   //   return response.json()
      //   // })
      //   .then((response) => {
      //     console.log(response)
      //     setShowPhone(false)
      //     setShowActivate(true)
      //   })
    }

    const handleActivate = (body) => {
      fetch(`${ENDPOINT}/verify/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
          .then((response) => {
            console.log(body)
          })
      setShowActivate(false)
      setShowReg(true)
    }

  return (
    <div className='login'>
      <Header title='Регистрация' bg='#26835f' close={showReg}/>
      {showPhone ? 
        <Phone handlePhone={handlePhone}/> : showActivate ? 
        <Activate handleActivate={handleActivate} phone={phone} /> : showRegister ? 
        <Registr  phone={phone}/> : null}
    </div>
  )
}

export default RegTemplate

