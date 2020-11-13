import React from 'react'

const Slide = (props) => {
  return(
    <div className='slide' >
      <img src={props.backImg} alt="alt" className='img' />
      <div className='content'>
        <div className='text'>{props.title}</div>
      </div>
    </div>
  )
}

export default Slide