import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { fetchProfileActionCreator} from './store/actions/profile'

import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/LobbyPage'
import PrivacyPage from './pages/Privacy'
import TermsPage from './pages/Terms'
import RulesPage from './pages/Rules'

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
  }, [token])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/lobby/:id' component = {LobbyPage}/>
        <Route path='/privacy' component = {PrivacyPage}/>
        <Route path='/terms' component = {TermsPage}/>
        <Route path='/rules' component = {RulesPage}/>
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
