import React  from 'react'

import Cancel from '../../../assets/icons/cancel'
import BackDrop from "../BackDrop";

import Logo from '../../../assets/icons/logo.svg'

const Login = (props) => {

  return (
    <>
      <BackDrop show={props.showLogin} clicked={props.backdropClicked}>
        <div className='login'>
          <div className='loginHeader'>
            <div>
              +400 хп за регистрацию
            </div>
            <div className='cancel' onClick={props.showLogin}><Cancel /></div>
          </div>
          <div className='loginHeaderContent'>
            <img src={Logo} alt='#'/>
            <div>Добро пожаловать в Arenum</div>
            <div>Нажимая кнопку, вы соглашаетесь с Условиями использования и Политикой конфиденциальности
              и подтверждаете, что вам есть 18 лет.
            </div>
          </div>
          <form className='loginForm'>
            <input
              name='name'
              placeholder='name'
            />
            <input
              name='surname'
              placeholder='surname'
            />
            <input
              name='phone'
              placeholder='phone'
            />
            <button className='loginFormBtn' >Регистрация</button>
          </form>
        </div>
      </BackDrop>
    </>
  )
}

export default Login
