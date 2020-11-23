import React from 'react'
import {NavLink} from 'react-router-dom' 

const CardIn = ({text}) => {
  return (
    <section className='cardIn container'>
      <h1>Найди свое место в киберспорте</h1>
      <p>{text}</p>
      <div>
          <NavLink
            to='/tournaments'
            className='home-btn'
            exact
          >
          Играть сейчас
          </NavLink>
        </div>
    </section>
  )
}

export default CardIn