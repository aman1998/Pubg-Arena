import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const sidebarItem = [
    { id: 1, link: '/profile/', text: 'Личные Данные' },
    { id: 2,link: '/profile/settings/', text: 'Настройка аккаунта' },
    { id: 3, link: '/profile/cardIn/', text: 'Пополнить счет'},
    { id: 4, link: '/profile/cardOut/', text: 'Вывести со счета'},
    { id: 5, link: '/profile/createLobbie/', text: 'Создать лобби'},
  ]
  return (
    <aside>
      <nav className='sidebar'>
        <div>
          <ul className={'sidebarItems'}>
          {
            sidebarItem.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className='sidebarItem'
                activeClassName='active'
                exact
              >
                <div>
                  <div className='sidebarItemIcon'>{item.icon}</div>
                  <div className='sidebarItemText'>{item.text}</div>
                </div>
              </NavLink>
            ))
          }
          </ul> 
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar