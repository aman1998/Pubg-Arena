import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setLoading} from '../../store/actions/lobbies'
import {setPlayers} from '../../store/actions/lobbies'

const ENDOPOINT = 'http://195.38.164.24:8080'

const Players = (props) => {

  const {players,isLoadingPlayers} = useSelector(state => ({
    players: state.lobbies.players,
    isLoadingPlayers: state.lobbies.isLoading,
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    if(isLoadingPlayers === true) {
      fetch(`${ENDOPOINT}/lobby/rates/${props.id}/`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(setPlayers(data.player_list))
          dispatch(setLoading(false))
        })
    }
  }, [isLoadingPlayers])

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