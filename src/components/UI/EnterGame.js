import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {enterGameActionCreator} from '../../store/actions/lobbies'
import BackDrop from "./BackDrop";
import { useTranslation } from 'react-i18next'

const EnterGame = (props) => {
  const { t } = useTranslation();

  const {myProfile, isLog, balance} = useSelector(state => ({
    myProfile: state.profile.myProfile,
    balance: state.profile.balance,
    isLog: state.isLogged
  }))
  const dispatch = useDispatch()

  const enterGame = () => {
    if(!props.isPlayed) {
      dispatch(enterGameActionCreator(props.id, myProfile.pk, myProfile.balance, props.priceGame))
    }
  }

  return (
    <>
      <BackDrop show={props.show} close={props.closePopup}/>
      <div className='enter'>
        {
          balance >= props.priceGame && isLog ?
            (
              <div>
                <div>{t('Events.modal.1')}</div>
                <div>{`${t('Events.modal.6')} ${props.priceGame} ${t('Burger.5')}`}</div>
                <button onClick={enterGame} className='enter-btn yes'>{t('Events.modal.2')}</button>
                <button onClick={props.closePopup} className='enter-btn no'>{t('Events.modal.3')}</button>
              </div>
            ) : balance < props.priceGame && isLog ?
            (
              <div className='enter-cardIn'>
                <div>{t('Events.modal.4')}</div>
                <div>{t('Events.modal.5')}</div>
                <div>
                  <NavLink to='/profile/cardIn' exact>
                  {t('Sidebar.3')}
                  </NavLink>
                </div>
              </div>
            ) : null
        }
      </div>
    </>
  )
}

export default EnterGame