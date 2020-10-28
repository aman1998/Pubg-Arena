import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'

const MainPage = () => {
  return (
    <PageTemplate>
      <section className='home-main'>
        <Events />
      </section>
    </PageTemplate>
  )
}

export default MainPage