import React from 'react'

import Slider from "../container/Slider";
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'

const MainPage = () => {

  return (
    <PageTemplate>
      <div className='home-main'>
         <Slider />
        <Events title='Расписание'/>
      </div>
    </PageTemplate>
  )
}

export default MainPage