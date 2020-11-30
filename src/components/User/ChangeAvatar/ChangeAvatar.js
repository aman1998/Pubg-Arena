import React from 'react'

const ChangeAvatar = () => {
  const handleChangeAvatar = (e) => {
    e.preventDefault()
  }

  return(
    <form className='change-form'>
      <label htmlFor='avatar'>Выберите файл:</label>
      <input id='avatar' type='file' accept='images/*' name='avatar' />
      <button className='change-btn' onClick={(e) => handleChangeAvatar(e)}>Изменить аватарку</button>
    </form>
  )
}

export default ChangeAvatar