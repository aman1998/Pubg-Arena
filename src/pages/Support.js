import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import FacebookIcon from '@material-ui/icons/Facebook'
import MessageIcon from '@material-ui/icons/Email'
import InstagramIcon from '@material-ui/icons/Instagram'
import TelegramIcon from '@material-ui/icons/Telegram'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'

const Support = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageTemplate>
      <section className='support container'>
        <div className='support-title'>
          Если у вас возникли проблемы, то напишите в наши социальные сети, и мы с удовольствием поможем вам.
        </div>
        <a className='support-link' href='https://www.facebook.com/Arena-Games-104788511481561'>
          <div className='item'>
            <FacebookIcon className='facebook'/>
            <div>Написать в Facebook</div>
          </div>
          <MessageIcon className='message'/>
        </a>
        <a className='support-link' href='https://www.instagram.com/arenagames.io/'>
          <div className='item'>
            <InstagramIcon className='instagram'/>
            <div>Написать в Instagram</div>
          </div>
          <MessageIcon className='message'/>
        </a>
        <a className='support-link' href='https://t.me/arenagamesio'>
          <div className='item'>
            <TelegramIcon className='telegram'/>
            <div>Написать в Telegram</div>
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

export default Support