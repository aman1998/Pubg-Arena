import React from 'react'
import Registr from './Registr'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";

const ENDPOINT = 'http://localhost:8000'

const RegTemplate = (props) => {
  const [showRegistr, setReg] = React.useState(false)
  const [showPhone, setPhone] = React.useState(true)
  const [showActivate, setActivate] = React.useState(false)
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
        // .then((response) => {
        //   if (!response.ok) throw response.status
        //   return response.json()
        // })
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
      setActivate(false)
      setReg(true)
    }

  return (
    <div className='login'>
      <Header title='Регистрация' bg='#26835f' close={showReg}/>
      {showPhone ? 
        <Phone handlePhone={handlePhone}/> : showActivate ? 
        <Activate handleActivate={handleActivate} /> : showRegister ? 
        <Registr /> : null}
    </div>
  )
}

export default RegTemplate

