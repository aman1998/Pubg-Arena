import React  from 'react'

import BackDrop from "../BackDrop";
import Template from './Template'

const Login = (props) => {
  return (
    <>
      <BackDrop show={props.showLogin} clicked={props.backdropClicked} />
        <Template 
          title='Вход'
          close={props.showLogin}
          bg='#0054ff'
        > </Template>
    </>
  )
}

export default Login
