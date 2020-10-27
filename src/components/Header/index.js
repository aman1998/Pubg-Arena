import React from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom' 
import Logo from '../../assets/icons/logo.svg'

const Header = ({showLogin, login}) => {
  return (
    <header>
      <div className="container">
        <nav className={styles.block}>
          <ul className={styles.blockLeft}>
            <img src={Logo} alt='#'/>
            <NavLink
              to='./'
              className={styles.items}
              activeClassName={styles.active}
              exact
            >
              Главное
            </NavLink>
          </ul>
          <ul className={styles.blockRight}>
            <NavLink
                to='./profile'
                className={styles.items}
                activeClassName={styles.active}
                exact
              >
                Личный кабинет
            </NavLink> 
            <a
                className={`${styles.items} ${styles.itemsLogin}`}
                onClick={showLogin}
              >
                Войти
            </a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header