import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { setLoading } from '../../store/actions/lobbies'
import axios from '../../axios/axios'

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
          <div>Вы точно хотите вступить?</div>
          <div>{`С вашего баланса спишут ${props.priceGame} сомов`}</div>
          <button onClick={enterGame}>Да</button>
          <button onClick={props.closePopup}>Нет</button>
        </div> :
        myProfile.balance < props.priceGame && isLog ? 
        <div>
          <div>На вашем счету нету денег</div>
          <div>
            <NavLink to='/cardIn' exact>
              Пополнить
            </NavLink>
          </div>
          <button onClick={props.closePopup}>Отмена</button>
        </div> : 
        <div>
          <div>Вы не авторизованы</div>
          <button onClick={props.closePopup}>Отмена</button>
        </div>
      }
    </div>
  )
}

export default EnterGame