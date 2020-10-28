import React from 'react'

const BackDrop = (props) => {
  return(
    props.show ? (
      <div className='backdrop' onClick={props.clicked}>
        {props.children}
      </div>
    ): null
  )
}

export default BackDrop