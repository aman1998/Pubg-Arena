import React from 'react'
import { useSelector} from 'react-redux'

const UserRating = () => {
  const { name, myProfile } = useSelector(state => ({
    name: state.profile.myProfile.username,
    myProfile: state.profile.myProfile,
  }))

  console.log(myProfile)
  return (
    <section className='block'>
      <div className='blockUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div className='name'>{name}</div>
        </div>
        <div className='results'>
          <div className='item'>
            <p>0</p>
            <p>mmr</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписчиков</p>
          </div>
          <div className='item'>
            <p>0</p>
            <p>Подписки</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserRating