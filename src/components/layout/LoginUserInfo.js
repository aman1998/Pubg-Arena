import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import logout from '../../assets/icons/logout.svg'

const LoginUserInfo = (props) => {
  const {name} = useSelector(state => ({
    name: state.profile.myProfile.username
  }))

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  return(
    <div className='loginUserInfo'>
      <div className='username'>
        {name}
      </div>
      <div className='userAvatar'>
        <img src={props.avatar} alt='user Avatar' className='avatar' />
      </div>
      <div className='userMoney'>
        <img src={logout} alt='#' className='logout' onClick={removeToken}/>
      </div>
    </div>
  )
}

export default LoginUserInfo