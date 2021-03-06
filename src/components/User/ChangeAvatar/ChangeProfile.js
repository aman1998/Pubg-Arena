import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'
import { handleChangeInfoActionCreator } from '../../../store/actions/profile'
import Logo from '../../../assets/icons/logo.svg'
import { useTranslation } from 'react-i18next'

const ChangeProfile = () => {
  const { t } = useTranslation();
  const profile = useSelector(state => state.profile)
  const [name, setName] = useState(profile.myProfile.name)
  const [phone, setPhone] = useState(profile.myProfile.phone)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [fileName, setFileName] = useState('')
  const [files, setFiles] = useState([])

  const dispatch = useDispatch()
  const getReload = () => {
    window.location.reload()
  }


  const handleChangeAvatar = async (e) => {
    e.preventDefault()
    // const defaultImage = await fetch(`${profile.myProfile.avatar}`)
    let image = files

    let formData = new FormData()
    if(files.length !== 0){
      formData.append('avatar', image[0])
    }
    formData.append('name', name)
    formData.append('phone', phone)

    dispatch(handleChangeInfoActionCreator(
      formData, profile.myProfile.pk, profile.token, profile.myProfile, setLoading, setError ))
  }

  const handleFile = (file, name) => {
    setFiles([file])
    setFileName(name)
  }

  return(
    <section className='change'>
      {
        loading ? <img src={Logo} alt='#' className='loading change-loading'/> : 
        error ? 
        <div className='change-error'>
          <div>{t('Validate.12')}</div>
          <button className='change-error-btn' onClick={getReload}>{t('Login.btns.5')}</button>
        </div> :
        <form className='change-form'>
          <h2>{t('Profile.settings.1')}</h2>
          <label htmlFor='name-change' className='mini-title'>{t('Profile.settings.2')}:</label>
          <input
            type='text'
            id='name-change'
            className='input'
            name='name'
            placeholder={t('Profile.personal-data.3')}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor='phone-change' className='mini-title'>{t('Profile.settings.3')}:</label>
          <input
            type='text'
            className='input'
            id='phone-change'
            name='phone'
            placeholder={t('Profile.personal-data.2')}
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div className='avatar-change-wrapper'>
            <label htmlFor='avatar-change' className='mini-title avatar-change'>
              <div className='avatar-change-icon'></div>
              <div className='avatar-change-text'>{t('Profile.settings.4')}</div>
            </label>
            <input
              id='avatar-change'
              className='input'
              type='file'
              name='avatar'
              accept='image/x-png,image/jpeg'
              onChange={(e) => handleFile(e.target.files[0], e.target.files[0].name)}
            />
            <div className='avatar-text'>{fileName || t('Profile.settings.9')}</div>
          </div>
          <NavLink to='/change-password' className='mini-title nav'>{t('Profile.settings.5')}</NavLink>
          <button className='change-btn' onClick={(e) => handleChangeAvatar(e)}>{t('Profile.settings.6')}</button>
        </form>
      }
    </section>
  )
}

export default ChangeProfile