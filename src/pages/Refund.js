import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import { useTranslation } from 'react-i18next'

const Refund = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>{t('Refund.1')}</h1>
        <div>
        <p>{t('Refund.2')}</p>
        <p>{t('Refund.3')}</p>
        <p>{t('Refund.4')}</p>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.5')}</h2>
          <div>{t('Refund.6')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.7')}</h2>
          <div>{t('Refund.8')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.9')}</h2>
          <div>{t('Refund.10')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.11')}</h2>
          <div>{t('Refund.12')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.13')}</h2>
          <div>{t('Refund.14')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.15')}</h2>
          <div>{t('Refund.16')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Refund.17')}</h2>
          <div>{t('Refund.18')}</div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Refund