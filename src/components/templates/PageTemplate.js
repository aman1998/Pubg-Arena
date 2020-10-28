import React, {useState} from 'react'

import Header from '../layout/Header'
import Login from '../UI/Login/Login'
import Footer from '../layout/Footer'

// Обертка для всего сайта
const PageTemplate = (props) => {
  return (
    <div className='pageTemplate'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default PageTemplate