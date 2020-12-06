import React from 'react'
import {useSelector} from "react-redux";
import { useTranslation } from 'react-i18next'

const UserRatingKills = () => {
  const { t } = useTranslation();

  const profileKills = useSelector(state => state.profile.myProfile.total_kills)

  return(
    <div className='user-kills'>
      <h2>{t('Profile.personal-rating.1')}</h2>
      <div className='kills'>
        <div className='kills-item'>
          <div>{t('Profile.personal-rating.2')}</div>
          <div>{ profileKills && profileKills }</div>
        </div>
        <div className='kills-item'>
          <div>{t('Profile.personal-rating.4')}</div>
          <div>
            {
              profileKills < 40 ? t('Profile.personal-rating.5') : profileKills < 80 && profileKills >= 40 ? t('Profile.personal-rating.6') : profileKills >= 80 ? t('Profile.personal-rating.7') : t('Profile.personal-rating.8')
            }
          </div>
        </div>
        <div className='kills-item'>
          <div>{t('Profile.personal-rating.3')}</div>
          <div>
            {
              profileKills < 40 ? 3 : profileKills < 80 && profileKills >= 40 ? 5 : profileKills >= 80 ? 7 : t('Profile.personal-rating.8')
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRatingKills