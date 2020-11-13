import React from 'react'
import {NavLink} from 'react-router-dom'

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'

const Sidebar = () => {
  return (
    <aside>
      <nav className='sidebar'>
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
          </ul>
        </div>
      </nav>
    </aside>
)
}

export default Sidebar