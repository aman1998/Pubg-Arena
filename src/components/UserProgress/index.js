import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 

const UserProgress = () => {
  return (
    <nav className={styles.block}>
      <NavLink
        to='/profile'
        className={styles.blockItem}
        activeClassName={styles.active}
        exact>  
        Турниры
      </NavLink>
      <NavLink
        to='/profile/rewards'
        className={styles.blockItem}
        activeClassName={styles.active}
        exact>  
        Задания
      </NavLink>
      <NavLink
        to='/profile/progress'
        className={styles.blockItem}
        activeClassName={styles.active}
        exact>  
        Достижения
      </NavLink>
    </nav>
  )
}

export default UserProgress