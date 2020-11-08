import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import Events from '../components/Events/event'
import Slider from "../container/Slider";
import { useSelector, useDispatch } from 'react-redux'
import {getLobbiesList as getLobbiesListAction, getLobbiesSuccess as getLobbiesSuccessAction} from '../store/actions/lobbies';

const ENDOPOINT = 'http://localhost:1717'

const MainPage = () => {
  const { getLobbiesSuccess } = useSelector(state => ({
    getLobbiesSuccess: state.lobbies.success,
  }))

const dispatch = useDispatch()

React.useEffect(() => {
  if(getLobbiesSuccess) {
    fetch(`${ENDOPOINT}/list`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getLobbiesListAction(data))
        dispatch(getLobbiesSuccessAction(false))
      })
  }
}, [getLobbiesSuccess])

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