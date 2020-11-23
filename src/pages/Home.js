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
        <CardIn text='Живи игрой. Побеждай красиво'/>
        <HomeInfo2 />
        <Questions />
        <CardIn text='Готов к игре? Начни сейчас'/>
      </div>
    </PageTemplate>
  )
}

export default Home