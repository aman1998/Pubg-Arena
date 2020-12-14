import React from 'react'
import { useTranslation } from 'react-i18next'

const getReload = () => {
  window.location.reload()
}

const Error = () => {
  const { t } = useTranslation()
  return(
      <section className='error-req'>
        <div className='error-text'>{t('Errors.500.1')}</div>
        <button className='error-btn btn' onClick={getReload}>{t('Errors.500.2')}</button>
      </section>
  )
}

export default Error