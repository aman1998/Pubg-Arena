import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import { useTranslation } from 'react-i18next'

const Terms = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>{t('Terms.1')}</h1>
        <div>
        <p>{t('Terms.2')}</p>
        <p>{t('Terms.5')}</p>
        <p>{t('Terms.3')}</p>
        <p>{t('Terms.4')}</p>
        </div>
        <div className='privacy-list'>
          <h2>{t('Terms.term-1.1')}</h2>
          <div>{t('Terms.term-1.2')}</div>
          <div>{t('Terms.term-1.3')}</div>
          <div>{t('Terms.term-1.4')}</div>
          <div>{t('Terms.term-1.5')}</div>
          <div>{t('Terms.term-1.6')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Terms.term-2.1')}</h2>
          <div>{t('Terms.term-2.2')}</div>
          <div>{t('Terms.term-2.3')}</div>
          <div>{t('Terms.term-2.4')}</div>
          <div>{t('Terms.term-2.5')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Terms.term-3.1')}</h2>
          <div>{t('Terms.term-3.2')}</div>
          <div>{t('Terms.term-3.3')}</div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Terms 