import React from 'react'
import terminal1 from '../../assets/img/terminal-1.png'
import terminal2 from '../../assets/img/terminal-2.png'
import terminal3 from '../../assets/img/terminal-3.png'
import terminal4 from '../../assets/img/terminal-4.png'

import { useTranslation } from 'react-i18next'

const Pay24 = () => {
  const { t } = useTranslation();

  return (
    <section className='pay24 container'>
      <h1 className='pay24-title'>Pay 24</h1>
      <div>
        <div className='action'>{t('Money.pay24.1')}</div>
        <img src={terminal1} alt="pay24" className='screen'/>
      </div>
      <div>
        <div className='action'>{t('Money.pay24.2')}</div>
        <img src={terminal2} alt="pay24" className='screen'/>
      </div>
      <div>
        <div className='action'>{t('Money.pay24.3')}</div>
        <img src={terminal3} alt="pay24" className='screen'/>
      </div>
      <div>
        <div className='action'>{t('Money.pay24.4')}</div>
        <img src={terminal4} alt="pay24" className='screen'/>
      </div>
      <div>
        <div className='action'>{t('Money.pay24.5')}</div>
        <div alt="pay24" className='screen screen--empty'></div>
      </div>
      <div>
        <div className='action'>{t('Money.pay24.6')}</div>
        <div alt="pay24" className='screen screen--empty'></div>
      </div>
    </section>
  )
}

export default Pay24