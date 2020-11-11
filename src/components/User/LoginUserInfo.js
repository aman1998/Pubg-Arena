import React, {useState} from 'react'
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { NavLink } from 'react-router-dom'

const LoginUserInfo = (props) => {
  const [modalUserInfo, setModalUserInfo] = useState(false)

  return (
    <div className='loginUserInfo'>
      <div className='userAvatar' onClick={() => setModalUserInfo(!modalUserInfo)}>
        <PersonIcon className='userIcon' />
      </div>
      <div className={modalUserInfo ? 'modalInfo down' : 'modalInfo up'}>
          <div className='phone'>
              {props.phone}
          </div>
        <div className='username'>
          {props.name}
        </div>
        <div className='money'>
          {props.money}
        </div>
        <div className='sidebar-mobile'>
          <div><NavLink to='/profile/' exact>Личные данные</NavLink></div>
          <div><NavLink to='/profile/settings/' exact>Настройки</NavLink></div>
          <div><NavLink to='/profile/cardIn/' exact>Пополнить счет</NavLink></div>
          <div><NavLink to='/profile/cardOut/' exact>Вывести со счета</NavLink></div>
        </div>
        <div className='userMoney'>
          <Link to={'/'} onClick={props.handleLogout}>
            <ExitToAppIcon className='logout' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginUserInfo