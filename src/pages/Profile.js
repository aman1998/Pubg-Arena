import React from 'react'
import { Route } from 'react-router-dom'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserInfo from '../components/User/UserInfo'
import Events from '../components/Events/event'

const Profile = () => {
  return (
    <PageTemplate>
      <div className='container profile'>
        <Sidebar />
        <div className='content'>
        <Route path='/profile/' exact>
          <UserInfo />
        </Route>
        <Route path='/profile/settings' exact>
          Настройки
        </Route>
        <Route path='/profile/card' exact>
          вывести
        </Route>
        <Route path='/profile/tasks' exact>
          Задачи
        </Route>
        <Route path='/profile/events' exact>
          Турниры
        </Route>
        <Route path='/profile/достижения' exact>
          достижения
        </Route>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Profile