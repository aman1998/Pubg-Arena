import React from 'react'
import Cancel from '../../../assets/icons/cancel'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
      <div className='cancel' onClick={props.close}><Cancel /></div>
      <div className='loginHeaderContent'>
        <div className='login-title'>Добро пожаловать в Arena Games</div>
        <div className='login-text'>Нажимая кнопку, вы соглашаетесь   
          <p>с <NavLink to='/terms' exact>Условиями использования</NavLink></p> <p>и <NavLink to='/rules' exact>Политикой конфиденциальности</NavLink></p>
          подтверждаете, что вам есть 18 лет.
        </div>
      </div>
    </div>
  )
}

export default Header