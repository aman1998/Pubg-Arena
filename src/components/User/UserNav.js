import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = () => {

  return (
    <nav>
      <NavLink
        to='/profile'
        className='navItem'
        activeClassName='active'
      >
        Задания
      </NavLink>
      <NavLink
        to='/profile/events'
        className='navItem'
        activeClassName='active'
      >
        Турниры
      </NavLink>
      <NavLink
        to='/profile/progress'
        className='navItem'
        activeClassName='active'
      >
        Достижения
      </NavLink>
    </nav>
  )
}

export default UserNav
