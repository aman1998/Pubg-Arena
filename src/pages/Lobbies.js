import React from 'react'
// import {useSelector} from 'react-redux'
import Slider from "../container/Slider";
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'
import {fetchLobbiesActionCreator} from '../store/actions/lobbies'
import {useDispatch, useSelector} from 'react-redux'
import Logo from '../assets/icons/logo.svg'

const MainPage = () => {
  const {loading, success, lobbies} = useSelector(state => ({
    loading: state.lobbies.get.loading,
    success: state.lobbies.get.success,
    lobbies: state.lobbies.list,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if(lobbies.length === 0) {
      dispatch(fetchLobbiesActionCreator())
    }
  }, [])

  return (
    <PageTemplate>
      {
        loading ? <img src={Logo} alt='#' className='loading' /> :
        success ? 
        <div className='home-main'>
          <Slider />
          <Events title='Расписание'/>
        </div> : <div>Ошибка сервера, обновите</div>
      }
    </PageTemplate>
  )
}

export default MainPage