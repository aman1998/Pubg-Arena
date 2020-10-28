import React from 'react'

const UserInfo = () => {
  return (
    <section className='user'>
      <div className='userUser'>
        <div className='userInfo'>
          <div className='avatar'></div>
          <div>
            <div className='name'>Амангельди</div>
            <div className='edit'>Редактировать</div>
          </div>
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