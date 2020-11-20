import React from 'react'
import {NavLink} from 'react-router-dom' 

const CardIn = () => {
  return (
    <section className='cardIn container'>
      <h1>Найди свое место в киберспорте</h1>
      <p>Живи игрой. Побеждай красиво</p>
      <div>
          <NavLink
            to='/profile/cardIn'
            className='home-btn'
            exact
          >
          Пополнить
          </NavLink>
        </div>
    </section>
  )
}

export default CardIn