import React from 'react'
import {NavLink} from 'react-router-dom'

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

import { useTranslation } from 'react-i18next'

const Sidebar = () => {
  const { t } = useTranslation()

  return (
    <aside>
      <nav className='sidebar'>
        <h2>{t('Sidebar.7')}</h2>
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
                <div className='sidebarItemText'>{t('Sidebar.1')}</div>
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
                <div className='sidebarItemText'>{t('Sidebar.2')}</div>
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
                <div className='sidebarItemText'>{t('Sidebar.3')}</div>
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
                <div className='sidebarItemText'>{t('Sidebar.4')}</div>
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
                <div className='sidebarItemText'>{t('Sidebar.5')}</div>
              </div>
            </NavLink>
          </ul>
        </div>
      </nav>
    </aside>
)
}

export default Sidebar