import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { NavLink } from 'react-router-dom'
import { handleChangeInfoActionCreator } from '../../../store/actions/profile'

const ChangeProfile = () => {
  const profile = useSelector(state => state.profile)
  const [name, setName] = useState(profile.myProfile.name)
  const [phone, setPhone] = useState(profile.myProfile.phone)
  const files = []
  const dispatch = useDispatch()
  const handleChangeAvatar = async (e) => {
    e.preventDefault()
    // const defaultImage = await fetch(`${profile.myProfile.avatar}`)
    let image = files[0]

    let formData = new FormData()
    if(files.length !== 0){
      formData.append('avatar', image[0])
    }
    formData.append('name', name)
    formData.append('phone', phone)

    dispatch(handleChangeInfoActionCreator(formData, profile.myProfile.pk, profile.token ))
  }

  return(
    <form className='change-form'>
      <h2>Изменить информацию</h2>
      <label htmlFor='name-change' className='mini-title'>Изменить имя:</label>
      <input
        type='text'
        id='name-change'
        className='input'
        name='name'
        placeholder='имя'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor='phone-change' className='mini-title'>Изменить номер(лицевой счет):</label>
      <input
        type='text'
        className='input'
        id='phone-change'
        name='phone'
        placeholder='лицевой счет'
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <label htmlFor='avatar-change' className='mini-title'>Выберите файл:</label>
      <input
        id='avatar-change'
        className='input'
        type='file'
        name='avatar'
        accept='image/x-png,image/jpeg'
        onChange={e => files.push(e.target.files)}
      />
      <NavLink to='/change-password' className='mini-title nav'>Изменить пароль?</NavLink>
      <button className='change-btn' onClick={(e) => handleChangeAvatar(e)}>Изменить</button>
    </form>
  )
}

export default ChangeProfile