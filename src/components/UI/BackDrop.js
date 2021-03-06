import React from 'react'

const BackDrop = (props) => {
  const closeModal = () => {
    props.close()
  }
  return(
    props.show ? (
      <div className='backdrop' onClick={closeModal}> </div>
    ): null
  )
}

export default BackDrop