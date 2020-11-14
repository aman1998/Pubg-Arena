import React from 'react'
import {useSelector} from 'react-redux'

import Slider from "../container/Slider";
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'

const MainPage = () => {
  const {loading, success} = useSelector(state => ({
    loading: state.lobbies.get.loading,
    success: state.lobbies.get.success,
  }))
  return (
    <PageTemplate>
        { loading ? 
          <div className='loading'></div> : 
          success ? 
          <div className='home-main'>
            <Slider />
            <Events title='Расписание'/> 
          </div> :
          <div>Обновите</div> }
    </PageTemplate>
  )
}

export default MainPage