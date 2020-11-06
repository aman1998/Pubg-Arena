import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {getMyProfile as getProfileAction} from './store/actions/profile'
import {logIn, logOut} from "./store/actions/logInOut";
import {getLobbiesList as getLobbiesListAction, getLobbiesSuccess as getLobbiesSuccessAction } from './store/actions/lobbies'

import MainPage from './pages/Home'
import ProfilePage from './pages/Profile'
import LobbyPage from './pages/Lobby'

import './assets/style/style.scss'
import {loading, notLoading} from "./store/actions/isLoading";

const ENDOPOINT = 'http://localhost:1717'

function App() {

  const { token, isLog, getLobbiesSuccess } = useSelector(state => ({
      token: state.profile.token,
      myProfile: state.profile.myProfile,
      getLobbiesSuccess: state.lobbies.success,
      isLog: state.profile.isLog
    }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (token) {
      dispatch(loading())
      fetch(`${ENDOPOINT}/profile`, {
        method: 'GET',
        headers: { 'X-Auth': ` ${token}` },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          dispatch(getProfileAction(data))
          dispatch(logIn())
          dispatch(notLoading())
        })
        .catch((e) => {
          console.log(e.message)
          dispatch(logOut())
        })
    }
    fetch(`${ENDOPOINT}/list`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getLobbiesListAction(data))
        dispatch(getLobbiesSuccessAction(false))
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [token, getLobbiesSuccess])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/lobby/:id' component = {LobbyPage}/>
        {isLog ? 
        <Switch>
          <Route path='/profile' component={ProfilePage} />
          <Route path = '/profile/settings' component = {ProfilePage} />
          <Route path = '/profile/cardIn' component = {ProfilePage} />
          <Route path = '/profile/cardOut' component = {ProfilePage} />
          <Route path = '/profile/createLobbie' component = {ProfilePage} />
        </Switch> :
        null}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
