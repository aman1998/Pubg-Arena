import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import useWindowDimensions from "../Hooks/useWindowDimentions"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

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
              <div className='balance'>
                <div> {props.balance} </div>
                <MonetizationOnOutlinedIcon className='balance-icon'/>
              </div>
              <div className='username'>
                <div>{props.name}</div>
                <PersonOutlineOutlinedIcon className='userIcon'/>
              </div>
            </>
          ) : (
            <div className='username'>
              <PersonOutlineOutlinedIcon className='userIcon'/>
            </div>
          )
        }
      </div>
      <div className={modalUserInfo ? 'modalInfo down' : 'modalInfo up'}>
        {
          width <= 800 ? (
            <>
              <div className='phone'>
                Тел: {props.phone}
              </div>
              <div className='username'>
                Имя: {props.name}
              </div>
              <div className='money'>
                Баланс: {props.balance} сомов
              </div>
            </>
          ) : null
        }
        <div className='sidebar-mobile'>
          <div className='line'></div>
          <div><NavLink to='/profile' >Личные данные</NavLink></div>
          <div className='line'></div>
          <div><NavLink to='/profile/settings' >Настройки</NavLink></div>
          <div className='line'></div>
          <div><NavLink to='/profile/cardIn' >Пополнить счет</NavLink></div>
          <div className='line'></div>
          <div><NavLink to='/profile/cardOut' >Вывести со счета</NavLink></div>
          <div className='line'></div>
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