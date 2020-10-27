import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getName as getNameAction } from '../../../store/actions'

import Cancel from '../../../assets/icons/cancel'
import Logo from '../../../assets/icons/logo.svg'

const Login = ({showLogin}) => {
  const { name } = useSelector((state) => ({
    name: state.auth.name,
  }))

  const [inputName, setInputName] = useState('')

  const dispatch = useDispatch()
  const getName = (name) => dispatch(getNameAction(name))

  return (
    <div className='login'>
      <div onClick={() => getName('Esen')}>+400 хп за регистрацию</div>
      <div className='loginHeader'>
        <img src={Logo} alt='#' />
        <div>Добро пожаловать в Arenum</div>
        <div>Нажимая кнопку, вы соглашаетесь с Условиями использования и Политикой конфиденциальности
и подтверждаете, что вам есть 18 лет.</div>
      </div>
      <form className='loginForm'>
        <label htmlFor='name'>
          <input 
            name='name'
            placeholder='name'
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <label htmlFor='surname'>
          <input 
            name='surname'
            placeholder='surname'
          />
        </label>
        <label htmlFor='phone'>
          <input 
            name='phone'
            placeholder='phone'
          />
        </label>
        <button className='loginFormBtn'>Регистрация</button>

        {/* Иконка закрытия блока */}
        <div className='cancel' onClick={showLogin}><Cancel /></div>
      </form>
    </div> 
  )
}

export default Login
