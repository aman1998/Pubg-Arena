import React from 'react'
import Register from './Register'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister"
import {hideState, showState} from "../../../store/actions/isAuthState"
import {setPhone as setPhoneAction} from '../../../store/actions/register'
import {setActivate} from '../../../store/actions/register'

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
      setShowPhone(false)
      setShowActivate(true)
      setPhone(body.phone)
      dispatch(showState())
      dispatch(setPhoneAction())
      setTimeout(() => {
        dispatch(hideState())
      }, 3000)
      fetch(`${ENDPOINT}/validate/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response)
          setPhone(false)
          setShowActivate(true)
        })
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
      dispatch(setActivate())
    }

  return (
    <div className='login'>
      <Header title='Регистрация' close={showReg} class='reg'/>
      {showPhone ? 
        <Phone handlePhone={handlePhone}/> : showActivate ? 
        <Activate handleActivate={handleActivate} /> : showRegister ? 
        <Register /> : null}
    </div>
  )
}

export default RegTemplate

