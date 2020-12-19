import React from 'react'
import {useSelector} from 'react-redux'

import { useTranslation } from 'react-i18next'

const Players = () => {
  const { t } = useTranslation()

  const {players, isLoadingPlayers} = useSelector(state => ({
    players: state.lobbies.players,
    isLoadingPlayers: state.lobbies.isLoading,
  }))

  return (
    <div className='lobby-right players-list'>
      <h2 className='title'>{t('Events.6')}</h2>
      {
        isLoadingPlayers ? <div className='players-loading'></div> :
          players ? players.map((item, index) => {
            return <div className='player' key={item.id}>
              <div>{index + 1}. {item.name.length <= 14 ? item.name : `${item.name.slice(0, 12)}-${item.name[item.name.length-1]}`}</div>
              {item.avatar ? <img src={item.avatar} className='player-avatar' alt='avatar'/> : 
              <div className='player-avatar-failed'></div> }
            </div>
          }) : null
      }
    </div>
  )
}

export default Players