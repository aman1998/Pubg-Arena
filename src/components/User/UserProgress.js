import React from 'react'
import { NavLink } from 'react-router-dom'

const UserProgress = () => {
  return (
    <nav >
      <NavLink
        to='/profile'
        className='navItem'
        activeClassName='active'
        exact>  
        Турниры
      </NavLink>
      <NavLink
        to='/profile/rewards'
        className='navItem'
        activeClassName='active'
        exact>  
        Задания
      </NavLink>
      <NavLink
        to='/profile/progress'
        className='navItem'
        activeClassName='active'
        exact>  
        Достижения
      </NavLink>
    </nav>
  )
}

export default UserProgress
