import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {enterGameActionCreator} from '../../store/actions/lobbies'
import BackDrop from "./BackDrop";

const EnterGame = (props) => {
  const {myProfile, isLog, balance} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    balance: state.profile.balance,
    isLog: state.isLogged
  }))
  const dispatch = useDispatch()

  const enterGame = () => {
    dispatch(enterGameActionCreator(props.id, myProfile.pk, myProfile.balance, props.priceGame))
  }

  return (
    <>
      <BackDrop show={props.show} close={props.closePopup}/>
      <div className='enter'>
        {
          balance >= props.priceGame && isLog ?
            <div>
              <div>Вы действительно желаете вступить в игру?</div>
              <div>{`С вашего баланса спишут ${props.priceGame} сомов`}</div>
              <button onClick={enterGame} className='enter-btn yes'>Да</button>
              <button onClick={props.closePopup} className='enter-btn no'>Нет</button>
            </div> :
            balance < props.priceGame && isLog ?
              <div className='enter-cardIn'>
                <div>У вас не достаточно средст для вступления в игру.</div>
                <div>Пожалуйста пополните баланс.</div>
                <div>
                  <NavLink to='/profile/cardIn' exact>
                    Пополнить
                  </NavLink>
                </div>
              </div> : null
        }
      </div>
    </>
  )
}

export default EnterGame