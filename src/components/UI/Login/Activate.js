import React from 'react'

const Activate = (props) => {
  return (
    <form className='loginForm' onSubmit={() => props.handleActivate()}>
      <input placeholder='Введите ключ активации'/>
      <button type="submit" className='loginFormBtn' style={{background: '#26835f'}}>
            Активировать
      </button>
    </form>
  )
}

export default Activate