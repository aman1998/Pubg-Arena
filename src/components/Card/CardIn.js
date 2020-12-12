import React from 'react'
import { NavLink } from 'react-router-dom'

import payIcon from '../../assets/icons/pay-24.svg'

import { useTranslation } from 'react-i18next'

const CardIn = () => {
  const { t } = useTranslation();

  return (
    <section className='cardIn'>
      <h2>{t('Profile.cardin.1')}</h2>
      <div className='text'>
        <p className='important'>{t('Profile.cardin.2')}</p>
        <p>{t('Profile.cardin.3')}</p>
      </div>
      <NavLink className='cardInIcons' to='/profile/cardIn/pay24'exact>
        <img src={payIcon} alt='Pay24' />
      </NavLink>
    </section>
  )
}

export default CardIn