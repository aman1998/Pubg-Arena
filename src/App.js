import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { fetchProfileActionCreator} from './store/actions/profile'
import {fetchLobbiesActionCreator} from './store/actions/lobbies'

import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/LobbyPage'

import './assets/style/style.scss'

function App() {
  const dispatch = useDispatch()

  const { token, isLog} = useSelector(state => ({
    token: state.profile.token,
    myProfile: state.profile.myProfile,
    isLog: state.profile.isLog,
  }))

  useEffect(() => {
    if (token) {
      dispatch(fetchProfileActionCreator())
    }
    dispatch(fetchLobbiesActionCreator())
  }, [token])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/lobby/:id' component = {LobbyPage}/>
        {isLog ? 
        <Switch>
          <Route path='/profile' component={ProfilePage} exact/>
          <Route path = '/profile/settings' component = {ProfilePage} exact/>
          <Route path = '/profile/cardIn' component = {ProfilePage} exact/>
          <Route path = '/profile/cardOut' component = {ProfilePage} exact/>
          <Route path = '/profile/createLobbie' component = {ProfilePage} exact />
        </Switch> :
        null}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
