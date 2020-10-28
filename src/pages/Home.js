import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import Slider from "../container/Slider";

const MainPage = () => {
  return (
    <PageTemplate>
      <div className='home-main'>
        <Slider />
      </div>
    </PageTemplate>
  )
}

export default MainPage