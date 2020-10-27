import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import UserInfo from '../components/User/UserInfo'
import UserProgress from '../components/User/UserProgress'

const ProfilePage = () => {
  return (
    <PageTemplate>
      <div className='container'>
        <UserInfo />
        <UserProgress />
      </div>
    </PageTemplate>
  )
}

export default ProfilePage