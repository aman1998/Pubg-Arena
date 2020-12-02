import React, {useState} from 'react'

const UserRatingKills = () => {
  const [kills] = useState(40)

  return(
    <div className='user-kills'>
      <h2>Личный рейтинг</h2>
      <div className='kills'>
        <div className='kills-item'>
          <div>Количество киллов</div>
          <div>{kills}</div>
        </div>
        <div className='kills-item'>
          <div>Уровень игрока</div>
          <div>{
            kills < 40 ? 'легкий' : kills < 80 && kills >= 40 ? 'нормальный' : kills >= 80 ? 'эксперт' : 'ведется посчет'
          }</div>
        </div>
        <div className='kills-item'>
          <div>Рейтинг</div>
          <div>{
            kills < 40 ? 3 : kills < 80 && kills >= 40 ? 5 : kills >= 80 ? 7 : 'ведется подсчет'
          }</div>
        </div>
      </div>
    </div>
  )
}

export default UserRatingKills