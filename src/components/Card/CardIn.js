import React from 'react'
import {Route} from 'react-router-dom'

import payIcon from '../../assets/icons/pay-24.svg'

import { useTranslation } from 'react-i18next'

const CardIn = () => {
  const { t } = useTranslation();

  return (
    <Route path='/profile/cardIn' exact>
      <section className='cardIn'>
        <h2>{t('Profile.cardin.1')}</h2>
        <div className='text'>
          <p className='important'>{t('Profile.cardin.2')}</p>
          <p>{t('Profile.cardin.3')}</p>

          <p>{t('Profile.cardin.4')}</p>

          <p className='important'>{t('Profile.cardin.5')}</p>
          <div className='important-items'>
            <p>{t('Profile.cardin.6')}</p>
            <p>{t('Profile.cardin.7')}</p>
            <p>{t('Profile.cardin.8')}</p>
            <p>{t('Profile.cardin.9')}</p>
          </div>

          <p className='important'>{t('Profile.cardin.10')}</p>

          <p>{t('Profile.cardin.11')}</p>

          <p>{t('Profile.cardin.12')}</p>
        </div>
        {/* <div className='cardInIcons'>
          <img src={payIcon} alt='Pay24' />
          <img src={payIcon} alt='Pay24' />
          <img src={payIcon} alt='Pay24' />
          <img src={payIcon} alt='Pay24' />
        </div> */}
      </section>
    </Route>
  )
}

export default CardIn