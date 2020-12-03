import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setPlayersActionCreator} from '../../store/actions/lobbies'

const Players = (props) => {

  const {players,isLoadingPlayers} = useSelector(state => ({
    players: state.lobbies.players,
    isLoadingPlayers: state.lobbies.isLoading,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if(isLoadingPlayers === true) {
      dispatch(setPlayersActionCreator(props.id))
    }
  }, [isLoadingPlayers, props.id])

  return (
    <div className='lobby-right players-list'>
      <h2 className='title'>Участники</h2>
      {
        isLoadingPlayers ? <div className='players-loading'> </div> :
        players ? players.map((item, index) => {
          return <div className='player' key={item.id}> {index + 1}. {item.name}</div>
        }) : null
      }
    </div>
  )
}

export default Players