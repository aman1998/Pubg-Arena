import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'

const ActivateOtp = (props) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('')
  return (
    <form className='change-pass' onSubmit={(e) => {
      e.preventDefault()
      props.handleActivateOtp({
        phone: props.phone, otp
      })
    }}>
      <h2>{t('Validate.1')}</h2>
      <div className='mini-title'>{t('Placeholder.2')}</div>
      <input type='text' name='phone' value={props.phone} disabled/>
      <div className='mini-title'>{t('Validate.1')}</div>
      <input
        type='text'
        name='otp'
        placeholder={t('Validate.1')}
        value={otp}
        onChange={e => setOtp(e.target.value)}
      />
      <button type="submit" className='change-btn'>
        {t('Login.btns.2')}
      </button>
    </form>
  )
}

export default ActivateOtp