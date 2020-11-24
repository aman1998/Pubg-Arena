import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { fetchProfileActionCreator} from './store/actions/profile'

import HomePage from './pages/Home'
import LobbiesPage from './pages/Lobbies'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/LobbyPage'
import PrivacyPage from './pages/Privacy'
import TermsPage from './pages/Terms'
import RulesPage from './pages/Rules'
import Rates from "./pages/Rates"
import PageNotFound from "./pages/404Page"

import './assets/style/style.scss'

function App() {
  const dispatch = useDispatch()

  const { token, isLog } = useSelector(state => ({
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
        <Route path='/' component={HomePage} exact/>
        <Route path='/tournaments' component={LobbiesPage} exact/>
        <Route path='/lobby/:id' component = {LobbyPage}/>
        <Route path='/privacy' component = {PrivacyPage}/>
        <Route path='/terms' component = {TermsPage}/>
        <Route path='/rules' component = {RulesPage}/>
        <Route path='/rates' component = {Rates} />
        {isLog ?
        <Switch>
          <Route path='/profile' component={ProfilePage} exact/>
          <Route path = '/profile/settings' component = {ProfilePage} exact/>
          <Route path = '/profile/cardIn' component = {ProfilePage} exact/>
          <Route path = '/profile/cardOut' component = {ProfilePage} exact/>
          <Route path = '/profile/createLobbie' component = {ProfilePage} exact />
          <Route path='/profile/language' component={ProfilePage} exact />
          <Route path='/profile/rating' component={ProfilePage} exact />
          <Route component={PageNotFound} />
        </Switch> :
        <div className='loading'></div>}
        <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
