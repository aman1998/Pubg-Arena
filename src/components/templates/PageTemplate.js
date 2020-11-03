import React from 'react'

import Header from '../layout/Header'
import Footer from '../layout/Footer'


// Обертка для всего сайта
const PageTemplate = (props) => {
  return (
    <div className='pageTemplate'>
      <Header />
      <main>{props.children}</main>
      <Footer class = {props.class}/>
    </div>
  )
}

export default PageTemplate