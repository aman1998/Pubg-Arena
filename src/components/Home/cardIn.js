import React from 'react'
import {NavLink} from 'react-router-dom' 
import { useTranslation } from 'react-i18next'

const CardIn = ({text}) => {
  const { t } = useTranslation()

  return (
    <section className='cardIn container'>
      <h1>{t('Home.card.1')}</h1>
      <p>{text}</p>
      <div>
          <NavLink
            to='/tournaments'
            className='home-btn'
            exact
          >
          {t('Home.card.3')}
          </NavLink>
        </div>
    </section>
  )
}

export default CardIn