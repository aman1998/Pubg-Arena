import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

import Login from "../components/UI/Login/Login";

const LoginController = () => {
  const [login, setLogin] = useState(false)

  const showLogin = () => {
    setLogin(!login)
  }

  return(
    <div className='blockRight'>
      <NavLink
        to='/profile'
        className='items'
        activeClassName='active'
      >
        Личный кабинет
      </NavLink>
      <div
        className='item itemsLogin'
        onClick={showLogin}
      >
        Войти
      </div>
      {login ? <Login showLogin={showLogin} login={login} showBack={login} backdropClicked={showLogin} /> : null}
    </div>
  )
}

export default LoginController