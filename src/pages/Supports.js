import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import FacebookIcon from '@material-ui/icons/Facebook'
import MessageIcon from '@material-ui/icons/Email'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'

import { useTranslation } from 'react-i18next'

const Terms = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <PageTemplate>
      <section className='support container'>
        <div className='support-title'>{t('Support.1')}</div>
        <a className='support-link' href='https://www.facebook.com/Arena-Games-104788511481561' target='_blank'>
          <div className='item'>
            <FacebookIcon className='facebook'/>
            <div>{t('Support.2')} Facebook</div>
          </div>
          <MessageIcon className='message'/>
        </a>
        <a className='support-link' href='https://www.instagram.com/arenagames.io/' target='_blank'>
          <div className='item'>
            <InstagramIcon className='instagram'/>
            <div>{t('Support.2')} Instagram</div>
          </div>
          <MessageIcon className='message'/>
        </a>
        <a className='support-link' href='https://t.me/arenagamesio' target='_blank'>
          <div className='item'>
            <TelegramIcon className='telegram'/>
            <div>{t('Support.2')} Telegram</div>
          </div>
          <MessageIcon className='message'/>
        </a>
        <a className='support-link' href='mailto:support@arenagames.io'>
          <div className='item'>
            <AlternateEmailIcon className='email'/>
            <div>support@arenagames.io</div>
          </div>
          <MessageIcon className='message'/>
        </a>
      </section>
    </PageTemplate>
  )
}

export default Terms 