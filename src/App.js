import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import {getMyProfile as getProfileAction} from './store/actions/auth2'

import './assets/style/style.scss'

const ENDOPOINT = 'http://localhost:1717'

function App() {

  const { token, myProfile} = useSelector(state => ({
      token: state.auth2.token,
      myProfile: state.auth2.myProfile,
    }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (token) {
      fetch(`${ENDOPOINT}/profile`, {
        method: 'GET',
        headers: { 'X-Auth': `${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          dispatch(getProfileAction(data))
          console.log('data',data)
        })
    }
  }, [token])

  console.log(myProfile)
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path = '/profile/settings' component = {ProfilePage} exact/>
        <Route path = '/profile/cardIn' component = {ProfilePage} exact/>
        <Route path = '/profile/cardOut' component = {ProfilePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
