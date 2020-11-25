import React from 'react'

const BackDrop = (props) => {
  return(
    props.show ? (
      <div className='backdrop' onClick={props.close}> </div>
    ): null
  )
}

export default BackDrop