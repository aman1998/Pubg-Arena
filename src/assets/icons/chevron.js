import React from 'react'

const Chevron = ({answer}) => {
  return (
    <svg 
      width="14" 
      height="8" 
      viewBox="0 0 14 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      style={answer ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
      >
      <path d="M1 1L7 7L13 1" stroke="#FFDD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='chevron'/>
    </svg>
  )
}

export default Chevron