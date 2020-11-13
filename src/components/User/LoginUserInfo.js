import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import useWindowDimensions from "../Hooks/useWindowDimentions"

import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

const LoginUserInfo = (props) => {
  const [modalUserInfo, setModalUserInfo] = useState(false)
  const {width} = useWindowDimensions()

  return (
    <div className='loginUserInfo'>
      <div
        className='userAvatar'
        onClick={() => setModalUserInfo(!modalUserInfo)}
      >
        {
          width >= 800 ? (
            <>
              <div className='username'>
                <div>{props.name}</div>
                <PersonIcon className='userIcon'/>
              </div>
              <div className='balance'>
                <div> {props.balance} </div>
                <MonetizationOnIcon className='balance-icon'/>
              </div>
            </>
          ) : (
            <div className='username'>
              <PersonIcon className='userIcon'/>
            </div>
          )
        }
      </div>
      <div className={modalUserInfo ? 'modalInfo down' : 'modalInfo up'}>
        {
          width <= 800 ? (
            <>
              <div className='phone'>
                {props.phone}
              </div>
              <div className='username'>
                {props.name}
              </div>
              <div className='money'>
                balance: {props.balance}
              </div>
            </>
          ) : null
        }
        <div className='sidebar-mobile'>
          <div><NavLink to='/profile/' exact>Личные данные</NavLink></div>
          <div><NavLink to='/profile/settings/' exact>Настройки</NavLink></div>
          <div><NavLink to='/profile/cardIn/' exact>Пополнить счет</NavLink></div>
          <div><NavLink to='/profile/cardOut/' exact>Вывести со счета</NavLink></div>
        </div>
        <div className='userMoney'>
          <Link to={'/'} onClick={props.handleLogout}>
            <ExitToAppIcon className='logout'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginUserInfo