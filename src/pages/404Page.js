import React from 'react'
import {Link} from 'react-router-dom'

import PageTemplate from "../components/templates/PageTemplate"

import image from '../assets/img/pubg-slide3.jpg'

import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
  const { t } = useTranslation()
  return(
    <PageTemplate>
      <div className='page-not-found'>
        <img src={image} alt='page not found' className='page-not-found-image'/>
        <div className='page-not-found-text'>
          <p className='number'>404</p>
          <p className='texts'>{t('Errors.404.1')}</p>
          <p className='texts'>{t('Errors.404.2')}</p>
          <Link to='/' className='page-not-found-btn'>{t('Errors.404.3')}</Link>
        </div>
      </div>
    </PageTemplate>
  )
}

export default PageNotFound