import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'

import './assets/style/style.scss'

const ENDOPOINT = 'url'

function App() {
  const token = localStorage.getItem('token');

  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   if (token) {
  //     fetch(`${ENDOPOINT}/profile`, {
  //       method: 'GET',
  //       headers: { 'X-Auth': `${token}` },
  //     })
  //       .then((response) => response.json())
  //       .then(({ data }) => {
          
  //       })
  //   }
  // }, [token])
  
  console.log(token)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path = '/profile/settings' component = {ProfilePage} exact/>
        <Route path = '/profile/card' component = {ProfilePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
