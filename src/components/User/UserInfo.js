import React from 'react'
import { NavLink } from 'react-router-dom'

const UserInfo = () => {
  return (
    <section className='block'>
      <div className='blockUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div className='name'>Амангельди</div>
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

export default UserInfo