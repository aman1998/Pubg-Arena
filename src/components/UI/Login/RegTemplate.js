import React from 'react'
import Registr from './Registr'
import Phone from './Phone'
import Activate from './Activate'
import {useDispatch} from "react-redux"
import Header from './Header'
import {showRegister} from "../../../store/actions/modalRegister";

const RegTemplate = (props) => {
  const [showRegistr, setReg] = React.useState(false)
  const [showPhone, setPhone] = React.useState(true)
  const [showActivate, setActivate] = React.useState(false)
  const dispatch = useDispatch()

  const showReg = () => {
    dispatch(showRegister())
    }

    const handlePhone = () => {
      setPhone(false)
      setActivate(true)
    }

    const handleActivate = () => {
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
