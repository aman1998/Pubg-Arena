import React from 'react'
import styles from './styles.module.scss'
import Header from '../Header'
import Login from '../Login'

// Обертка для всего сайта

const PageTemplate = ({children}) => {
  const [login, setLogin] = React.useState(true)

  const showLogin = () => {
    setLogin(!login)
  }
  return (
    <div>
      <Header showLogin={showLogin} login={login}/>
      {children}
      {login ? <Login /> : null}
    </div>
  )
}

export default PageTemplate