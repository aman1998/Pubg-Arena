import React from 'react'
import {NavLink} from 'react-router-dom'

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import LanguageIcon from '@material-ui/icons/Language'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const Sidebar = () => {
  return (
    <aside>
      <nav className='sidebar'>
        <h2>Личный кабинет</h2>
        <div>
          <ul className={'sidebarItems'}>
            <NavLink
              to='/profile/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <ErrorOutlineOutlinedIcon className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Личные Данные</div>
              </div>
            </NavLink>
            <NavLink
              to='/profile/settings/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <SettingsOutlinedIcon className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Настройки аккаунта</div>
              </div>
            </NavLink>
            <NavLink
              to='/profile/cardIn/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <AddCircleOutlineIcon className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Пополнить счета</div>
              </div>
            </NavLink>
            <NavLink
              to='/profile/cardOut/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <RemoveCircleOutlineOutlinedIcon className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Вывести со счета</div>
              </div>
            </NavLink>
            <NavLink
              to='/profile/rating/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <PersonOutlineIcon className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Личный рейтинг</div>
              </div>
            </NavLink>
            {/* <NavLink
              to='/profile/language/'
              className='sidebarItem'
              activeClassName='active'
              exact
            >
              <div>
                <LanguageIcon  className='sidebarItemIcon'/>
                <div className='sidebarItemText'>Выбор языка</div>
              </div>
            </NavLink> */}
          </ul>
        </div>
      </nav>
    </aside>
)
}

export default Sidebar