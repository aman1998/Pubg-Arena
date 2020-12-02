import React from 'react'

const Modal = (props) => {
  return(
    <>
      <div
        className={props.show ? 'error-for-more-gamers down' : 'error-for-more-gamers up'}
      >
        {props.detail}
      </div>
    </>
  )
}

export default Modal