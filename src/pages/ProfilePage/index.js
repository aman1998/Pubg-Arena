import React from 'react'
import PageTemplate from '../../components/PageTemplate'
import UserInfo from '../../components/UserInfo'
import UserProgress from '../../components/UserProgress'

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