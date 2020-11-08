import React from 'react'
import {useSelector} from "react-redux";

const Error = () => {
  const isError = useSelector(state => state.error)
  return(
    <div className={isError ? 'error-popup down' : 'error-popup up'}>
      you are not logged in
    </div>
  )
}

export default Error