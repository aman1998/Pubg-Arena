import React from 'react'
import {Link} from 'react-router-dom'

import PageTemplate from "../components/templates/PageTemplate"

import image from '../assets/img/pubg-slide3.jpg'

const PageNotFound = () => {
  return(
    <PageTemplate>
      <div className='page-not-found'>
        <img src={image} alt='page not found' className='page-not-found-image'/>
        <div className='page-not-found-text'>
          <p className='number'>404</p>
          <p className='texts'>Ошибка</p>
          <p className='texts'>Страница не найдена</p>
          <Link to='/' className='page-not-found-btn'>Главная</Link>
        </div>
      </div>
    </PageTemplate>
  )
}

export default PageNotFound