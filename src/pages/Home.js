import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

import HeaderContent from '../components/Home/header-content'
import HomeInfo1 from '../components/Home/home-info-1'
import HomeInfo2 from '../components/Home/home-info-2'
import CardIn from '../components/Home/cardIn'
import Questions from '../components/Home/questions'

const Home = () => {
  return (
    <PageTemplate>
      <div className='home'>
        <HeaderContent />
        <HomeInfo1 />
        <CardIn />
        <HomeInfo2 />
        <Questions />
      </div>
    </PageTemplate>
  )
}

export default Home