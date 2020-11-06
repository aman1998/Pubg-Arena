import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getMyProfile, setToken, checkIsLog} from '../../store/actions/profile'

import logout from '../../assets/icons/logout.svg'
import {logOut} from "../../store/actions/logInOut";

const LoginUserInfo = (props) => {
  const {name} = useSelector(state => ({
    name: state.profile.myProfile.username
  }))

  const dispatch = useDispatch()

  const removeToken = () => {
    localStorage.removeItem('token')
    dispatch(getMyProfile({favoritesList: []}))
    dispatch(setToken(null))
    dispatch(logOut(false))
    dispatch(checkIsLog(false))
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