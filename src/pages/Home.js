import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'

import HeaderContent from '../components/Home/header-content'
import HomeInfo1 from '../components/Home/home-info-1'
import HomeInfo2 from '../components/Home/home-info-2'
import CardIn from '../components/Home/cardIn'
import Questions from '../components/Home/questions'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <PageTemplate>
      <div className='home'>
        <HeaderContent />
        <HomeInfo1 />
        <CardIn text={t('Home.card.2')}/>
        <HomeInfo2 />
        <Questions />
        <CardIn text={t('Home.card.4')}/>
      </div>
    </PageTemplate>
  )
}

export default Home