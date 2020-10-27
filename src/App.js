import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'


function App () {
  return (
      <BrowserRouter>
        <Switch>
          <Route path = '/' component = {MainPage} exact/>
          <Route path = '/profile' component = {ProfilePage} exact/>
        </Switch>
      </BrowserRouter>
    )
}

export default App;
