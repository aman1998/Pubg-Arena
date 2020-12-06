import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import { useTranslation } from 'react-i18next'

const Privacy = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>{t('Privacy.1')}</h1>
        <div>
        <p>{t('Privacy.2')}</p>
        <p>{t('Privacy.3')}</p>
        <p>{t('Privacy.4')}</p>
        </div>
        <div className='privacy-list'>
          <h2>{t('Privacy.privacy-1.1')}</h2>
          <div>
          {t('Privacy.privacy-1.2')}
            <ul>
              <li>{t('Privacy.privacy-1.3')}</li>
              <li>{t('Privacy.privacy-1.4')}</li>
              <li>{t('Privacy.privacy-1.5')}</li>
            </ul>
          </div>
          <div>{t('Privacy.privacy-1.6')}</div>
          <div>{t('Privacy.privacy-1.7')}</div>
          <div>{t('Privacy.privacy-1.8')}</div>
          <div>{t('Privacy.privacy-1.9')}</div>
          <div>{t('Privacy.privacy-1.10')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Privacy.privacy-2.1')}</h2>
          <div>{t('Privacy.privacy-2.2')}</div>
          <div>{t('Privacy.privacy-2.3')}</div>
          <div>
            {t('Privacy.privacy-2.4')}
            <ul>
              <li>{t('Privacy.privacy-2.5')}</li>
            </ul>
          </div>
          <div>
          {t('Privacy.privacy-2.6')}
          <ul>
            <li>{t('Privacy.privacy-2.7')}</li>
          </ul>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Privacy 