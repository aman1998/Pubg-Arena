import React from 'react'
import { Route } from 'react-router-dom'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserInfo from '../components/User/UserInfo'
import CardIn from '../components/Card/CardIn'
import CardOut from '../components/Card/CardOut'
import CreateLobbie from '../components/Lobbies/createLobbie'

const Profile = () => {
  return (
    <PageTemplate class='footer-profile'>
      <div className='container profile'>
        <Sidebar />
        <div className='content'>
        <Route path='/profile/' exact>
          <UserInfo />
        </Route>
        <Route path='/profile/settings' exact>
          Настройки
        </Route>
        <CardIn />
        <CardOut />
        <Route path='/profile/createLobbie' exact>
          <CreateLobbie />
        </Route>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Profile