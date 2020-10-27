import React from 'react'

import Header from '../layout/Header'
import Login from '../UI/Login/Login'
import Footer from '../layout/Footer'

// Обертка для всего сайта

const PageTemplate = (props) => {
  const [login, setLogin] = React.useState(false)

  const showLogin = () => {
    setLogin(!login)
  }
  return (
    <div className='pageTemplate'>
      <Header showLogin={showLogin} login={login}/>
      {props.children}
      {login ? <Login showLogin={showLogin}/> : null}
      <Footer />
    </div>
  )
}

export default PageTemplate