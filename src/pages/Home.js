import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

import HeaderContent from '../components/Home/header-content'
import HomeInfo1 from '../components/Home/home-info-1'
import CardIn from '../components/Home/cardIn'

const Home = () => {
  return (
    <PageTemplate>
      <div className='home'>
        <HeaderContent />
        <HomeInfo1 />
        <CardIn />
      </div>
    </PageTemplate>
  )
}

export default Home