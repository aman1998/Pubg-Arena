import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { setLoading } from '../../store/actions/lobbies'
import axios from '../../axios/axios'
import Login from '../UI/Login/Login'
import {showLogin} from "../../store/actions/modalLogin"

const EnterGame = (props) => {
  const {myProfile, isLog} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    isLog: state.isLogged
  }))
  const dispatch = useDispatch()

  const enterGame = () => {
    axios.post('/lobby/users/', {rates: props.id, user: myProfile.pk, balance: myProfile.balance})
      .then(() => {
        dispatch(setLoading(true))
        props.closePopup()
      })
      .catch(e => console.log(e))
  }
  return (
    <div className='enter'>
      {
        myProfile.balance >= props.priceGame && isLog ? 
        <div>
          <div>Вы действительно желаете вступить в игру?</div>
          <div>{`С вашего баланса спишут ${props.priceGame} сомов`}</div>
          <button onClick={enterGame} className='enter-btn yes'>Да</button>
          <button onClick={props.closePopup} className='enter-btn no'>Нет</button>
        </div> :
        myProfile.balance < props.priceGame && isLog ? 
        <div className='enter-cardIn'>
          <div>У вас не достаточно средст для вступления в игру</div>
          <div>Пожалуйста пополните баланс</div>
          <div>
            <NavLink to='/profile/cardIn' exact>
              Пополнить
            </NavLink>
          </div>
          {/* <button onClick={props.closePopup}>Отмена</button> */}
        </div> : null
      }
    </div>
  )
}

export default EnterGame