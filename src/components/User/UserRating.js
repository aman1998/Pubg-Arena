import React from 'react'
import { useSelector} from 'react-redux'
import { useTranslation } from 'react-i18next'

const UserRating = () => {
  const { t } = useTranslation();

  const {myProfile} = useSelector(state => ({
    myProfile: state.profile.myProfile,
  }))

  return (
    <section className='block'>
      <div className='blockUser'>
        <h2>{t('Profile.personal-data.1')}</h2>
        <div className='userInfo'>
          <div className='phone-box'>
            <div className='phone-subtitle'>
            {t('Profile.personal-data.2')}
            </div>
            <div className='phone'>
              {myProfile.phone}
            </div>
          </div>
          <div className='name-box'>
            <div className='name-subtitle'>
            {t('Profile.personal-data.3')}
            </div>
            <div className='name'>
              {myProfile.name}
            </div>
          </div>
          <div className='balance-box'>
            <div className='balance-subtitle'>
            {t('Profile.personal-data.4')}
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