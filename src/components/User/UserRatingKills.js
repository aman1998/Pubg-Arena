import React from 'react'
import {useSelector} from "react-redux";

const UserRatingKills = () => {
  const profileKills = useSelector(state => state.profile.myProfile.total_kills)

  return(
    <div className='user-kills'>
      <h2>Личный рейтинг</h2>
      <div className='kills'>
        <div className='kills-item'>
          <div>Количество киллов</div>
          <div>{ profileKills && profileKills }</div>
        </div>
        <div className='kills-item'>
          <div>Уровень игрока</div>
          <div>
            {
              profileKills < 40 ? 'легкий' : profileKills < 80 && profileKills >= 40 ? 'нормальный' : profileKills >= 80 ? 'эксперт' : 'ведется посчет'
            }
          </div>
        </div>
        <div className='kills-item'>
          <div>Рейтинг</div>
          <div>
            {
              profileKills < 40 ? 3 : profileKills < 80 && profileKills >= 40 ? 5 : profileKills >= 80 ? 7 : 'ведется подсчет'
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRatingKills