import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import useWindowDimensions from "../Hooks/useWindowDimentions"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

import { useTranslation } from 'react-i18next'

const LoginUserInfo = (props) => {
  const { t } = useTranslation()

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
          {t('Sidebar.3')}
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
              {t('Burger.3')}: {props.phone}
              </div>
              <div className='username'>
              {t('Burger.2')}: {props.name}
              </div>
              <div className='money'>
              {t('Burger.4')}: {props.balance} {t('Burger.5')}
              </div>
            </>
          ) : null
        }
        <div className='sidebar-mobile'>
          <div className='line'> </div>
          <div><NavLink to='/tournaments/' exact>{t('Header.3')}</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/rates/' exact>{t('Header.2')}</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/' exact>{t('Sidebar.1')}</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/settings/' exact>{t('Sidebar.2')}</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/cardIn/' exact>{t('Sidebar.3')}</NavLink></div>
          <div className='line'> </div>
          <div><NavLink to='/profile/cardOut/' exact>{t('Sidebar.4')}</NavLink></div>
          <div className='line'> </div>
        </div>
        <div className='userMoney'>
          <Link to={'/'} onClick={props.handleLogout}>{t('Burger.1')}</Link>
        </div>
      </div>
      <div className='select select-mg'>
        <select name = 'myfield' value={props.language} onChange={props.handleChange} className='language'>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  )
}

export default LoginUserInfo
