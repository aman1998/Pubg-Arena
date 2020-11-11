import React from 'react'
import { useSelector} from 'react-redux'

const UserRating = () => {
  const { name, myProfile, phone, balance } = useSelector(state => ({
    name: state.profile.myProfile.name,
    myProfile: state.profile.myProfile,
    phone: state.profile.myProfile.phone,
    balance: state.profile.myProfile.balance
  }))

  return (
    <section className='block'>
      <div className='blockUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div className='name'>{name}</div>
          <div className='name'>{balance}</div>
          <div className='name'>{phone}</div>
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