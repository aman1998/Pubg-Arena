import React  from 'react'

import BackDrop from "../BackDrop";
import Template from './Template'

const Login = (props) => {
  return (
    <>
      <BackDrop show={props.showLogin} clicked={props.backdropClicked}>
        <Template 
          title='Вход' 
          bg='#0054ff'
        ></Template>
      </BackDrop>
    </>
  )
}

export default Login
