import React from 'react'
import PageTemplate from '../../components/PageTemplate'
import styles from './styles.module.scss'

const ProfilePage = () => {
  return (
    <PageTemplate>
      <div className='container'>
        <section className={styles.block}>
          <div className={styles.blockUser}>
            <div className={styles.blockInfo}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Амангельди</div>
                <div className={styles.edit}>Редактировать</div>
              </div>
            </div>
            <div className={styles.results}>
              <div className={styles.item}>
                <p>0</p>
                <p>mmr</p>
              </div>
              <div className={styles.item}>
                <p>0</p>
                <p>Подписчиков</p>
              </div>
              <div className={styles.item}>
                <p>0</p>
                <p>Подписки</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}

export default ProfilePage