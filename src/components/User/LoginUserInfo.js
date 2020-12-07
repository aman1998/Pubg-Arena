import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import useWindowDimensions from "../Hooks/useWindowDimentions"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

const LoginUserInfo = (props) => {
  const [modalUserInfo, setModalUserInfo] = useState(false)
  const {width} = useWindowDimensions()


  return (
    <div className='loginUserInfo'>
      <div>
        <NavLink
          to='/profile/cardIn'
          className='cardIn'
          exact
        >
          Пополнить
        </NavLink>
      </div>
      <div
        className='userAvatar'
        onClick={() => setModalUserInfo(!modalUserInfo)}
      >
        {
          width >= 1000 ? (
            <>
              <div className='balance'>
                <div> {props.balance} </div>
                <MonetizationOnOutlinedIcon className='balance-icon'/>
              </div>
              <div className='username'>
                <div>{props.name}</div>
                {
                  props.avatar ? (
                    <img className='userIcon' src={props.avatar} alt='users avatar' />
                  ) : (
                    <PersonOutlineOutlinedIcon className='userIcon'/>
                  )
                }
              </div>
            </>
          ) : (
            <div className='username'>
              {
                props.avatar ? (
                  <img className='userIcon' src={props.avatar} alt='users avatar' />
                ) : (
                  <PersonOutlineOutlinedIcon className='userIcon'/>
                )
              }
            </div>
          )
        }
      </div>
      <div className={modalUserInfo ? 'modalInfo down' : 'modalInfo up'}>
        {
          width <= 1000 ? (
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
          <div className='line'> </div>
          <div><NavLink to='/tournaments/' exact>Турниры</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/rates/' exact>Рейтинги</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/rules/' exact>Правила игры</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/' exact>Личные данные</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/settings/' exact>Настройки</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/cardIn/' exact>Пополнить счет</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/cardOut/' exact>Вывести со счета</NavLink></div>
          <div className='line'> </div>
        </div>
        <div className='userMoney'>
          <Link to={'/'} onClick={props.handleLogout}>Выйти</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginUserInfo
