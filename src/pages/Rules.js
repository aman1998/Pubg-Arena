import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import { useTranslation } from 'react-i18next'

const Rules = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <PageTemplate>
      <section className='privacy container'>
        <h1>{t('Rules.1')}</h1>
        <div>
          <p>{t('Rules.2')}</p>
          <p>{t('Rules.3')}</p>
          <p>{t('Rules.4')}</p>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-1.1')}</h2>
          <div>{t('Rules.rule-1.2')}</div>
          <div>{t('Rules.rule-1.3')}</div>
          <div>{t('Rules.rule-1.4')}</div>
          <div>{t('Rules.rule-1.5')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-2.1')}</h2>
          <div>{t('Rules.rule-2.2')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-3.1')}</h2>
          <div>{t('Rules.rule-3.2')}</div>
          <div>{t('Rules.rule-3.3')}</div>
          <div>{t('Rules.rule-3.4')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-4.1')}</h2>
          <div>{t('Rules.rule-4.2')}</div>
          <div>{t('Rules.rule-4.3')}</div>
          <div>{t('Rules.rule-4.4')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-5.1')}</h2>
          <div>{t('Rules.rule-5.2')}</div>
          <div>{t('Rules.rule-5.3')}</div>
          <div>{t('Rules.rule-5.4')}</div>
          <div>{t('Rules.rule-5.5')}</div>
          <div>{t('Rules.rule-5.6')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-6.1')}</h2>
          <div>{t('Rules.rule-6.2')}</div>
          <div>{t('Rules.rule-6.3')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-7.1')}</h2>
          <div>{t('Rules.rule-7.2')}</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-8.1')}</h2>
          <div>{t('Rules.rule-8.2')}</div>
          <div>{t('Rules.rule-8.3')}
            <ul>
              <li>{t('Rules.rule-8.4')}</li>
              <li>{t('Rules.rule-8.5')}</li>
              <li>{t('Rules.rule-8.6')}</li>
              <li>{t('Rules.rule-8.7')}</li>
              <li>{t('Rules.rule-8.8')}</li>
              <li>{t('Rules.rule-8.9')}</li>
            </ul>
          </div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-9.1')}</h2>
          <div>{t('Rules.rule-9.2')}</div>
          <div>{t('Rules.rule-9.3')}</div>
          <div>{t('Rules.rule-9.4')}</div>
          <div>{t('Rules.rule-9.5')}</div>
          <div>{t('Rules.rule-9.6')}</div>
          <div>{t('Rules.rule-9.7')}</div>
          <div>{t('Rules.rule-9.8')}.</div>
        </div>
        <div className='privacy-list'>
          <h2>{t('Rules.rule-10.1')}</h2>
          <div>{t('Rules.rule-10.2')}</div>
          <div>{t('Rules.rule-10.3')}</div>
          <div>{t('Rules.rule-10.4')}</div>
          <div>{t('Rules.rule-10.5')}</div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Rules