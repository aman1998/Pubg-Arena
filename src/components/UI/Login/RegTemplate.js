import React from 'react'
import Register from './Register'
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
      fetch(`${ENDPOINT}/validate/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response)
          setPhone(false)
          setActivate(true)
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
    }

  return (
    <div className='login'>
      <Header title='Регистрация' bg='#26835f' close={showReg}/>
      {showPhone ? 
        <Phone handlePhone={handlePhone}/> : showActivate ? 
        <Activate handleActivate={handleActivate} /> : showRegister ? 
        <Register /> : null}
    </div>
  )
}

export default RegTemplate

