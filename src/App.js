import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'

import './assets/style/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path = '/profile/settings' component = {ProfilePage} exact/>
        <Route path = '/profile/card' component = {ProfilePage} exact/>
        <Route path = '/profile/tasks' component = {ProfilePage} exact/>
        <Route path = '/profile/progress' component = {ProfilePage} exact/>
        <Route path = '/profile/events' component = {ProfilePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
