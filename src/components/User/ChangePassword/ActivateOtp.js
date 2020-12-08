import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

const ActivateOtp = (props) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('')

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const handleActivate = (e) => {
    e.preventDefault()
    props.handleActivateOtp({
      phone: props.phone, otp
    })
  }

  return (
    <form className='change-pass loginForm'>
      <h2>{t('Placeholder.1')}</h2>
      <input type='text' name='phone' value={props.phone} disabled/>
      <input
        type='text'
        name='otp'
        placeholder={t('Placeholder.1')}
        value={otp}
        onChange={e => setOtp(e.target.value)}
      />
      <button type="submit" className='change-btn' onClick={handleActivate}>
        {loading ? <div className='login-loading'></div> :
        failed ? <div className='btn-error'>Повторить</div> : t('Login.btns.2')
        }
      </button>
    </form>
  )
}

export default ActivateOtp