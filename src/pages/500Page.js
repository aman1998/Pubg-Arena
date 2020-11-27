import React from 'react'

const getReload = () => {
  window.location.reload()
}

const Error = () => {
  return(
      <section className='error-req'>
        <div className='error-text'>Ошибка при получении данных с сервера</div>
        <button className='error-btn btn' onClick={getReload}>Повторить попытку</button>
      </section>
  )
}

export default Error