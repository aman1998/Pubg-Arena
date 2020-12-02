import React from 'react'
import { useSelector} from 'react-redux'

const UserRating = () => {
  const {myProfile} = useSelector(state => ({
    myProfile: state.profile.myProfile,
  }))

  console.log(myProfile)

  return (
    <section className='block'>
      <div className='blockUser'>
        <h2>Основная информация</h2>
        <div className='userInfo'>
          <div className='phone-box'>
            <div className='phone-subtitle'>
              Лицевой счет
            </div>
            <div className='phone'>
              {myProfile.phone}
            </div>
          </div>
          <div className='name-box'>
            <div className='name-subtitle'>
              Имя
            </div>
            <div className='name'>
              {myProfile.name}
            </div>
          </div>
          <div className='balance-box'>
            <div className='balance-subtitle'>
              Баланс
            </div>
            <div className='balance'>
              {myProfile.balance}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserRating