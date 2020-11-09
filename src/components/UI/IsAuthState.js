import React from 'react'
import {useSelector} from "react-redux";

const IsAuthState = (props) => {
  const isError = useSelector(state => state.isAuthState)
  return(
    <div className={isError ? `state-auth state-auth--${props.class} down` : `state-auth up`}>
      {props.text}
    </div>
  )
}

export default IsAuthState