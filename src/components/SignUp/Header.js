import React from 'react'
import Cancel from '../../assets/icons/cancel'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  const closeModal = () => {
    props.close()
    props.down(true)
  }
  return (
    <div>
      {props.title === 'Регистрация' ? null : <div className='cancel' onClick={closeModal}><Cancel /></div>}
      <div className='loginHeaderContent'>
        <div className={`${props.title !== 'Регистрация' ? 'login-title ' :' signUp-title'}`}>Добро пожаловать в Arena Games</div>
        {props.title === 'Регистрация' ? 
        <div className='signUp-text'>Нажимая кнопку, вы соглашаетесь   
          <p>с <NavLink to='/terms' exact>Условиями использования</NavLink></p> <p>и <NavLink to='/rules' exact>Политикой конфиденциальности</NavLink></p>
          подтверждаете, что вам есть 18 лет.
        </div> : 
        <div className='login-text'>Сражайтесь и зарабатывайте!</div>}
      </div>
    </div>
  )
}

export default Header