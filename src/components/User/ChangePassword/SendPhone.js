import React from 'react'
import {useSelector} from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import { useTranslation } from 'react-i18next'


const SendPhone = (props) => {
  const { t } = useTranslation();
  const [phone, setPhone] = React.useState('')

  const {loading, failed} = useSelector(state => ({
    loading: state.fetch.post.loading,
    failed: state.fetch.post.failed,
  }))

  const removeError = () => {
    props.setError(false)
  }

  const handleSendPhone = (e) => {
    e.preventDefault()
    if (phone) {
      props.handleSendPhone({phone})
    }
    else {
      props.setError(true)
    }
  }

  return (
    <form className='change-pass'>
      <div className='change-text'>{t('Login.14')}</div>
      <PhoneInput
        country='kg'
        onlyCountries={['kg']}
        disableDropdown
        containerClass='phone'
        placeholder={t('Validate.7')}
        value={phone}
        onChange={setPhone}
        onFocus={removeError}
      />
      {props.error ? <div className='error'>{t('Validate.2')}</div> : null}
      <button onClick={handleSendPhone}  className='change-btn'>
      {loading ? 
        <div className='login-loading'></div> : 
      failed ? 
        <div className='btn-error'>{t('Login.btns.5')}</div> : 
        t('Login.btns.1')}
      </button>
    </form>
  )
}

export default SendPhone