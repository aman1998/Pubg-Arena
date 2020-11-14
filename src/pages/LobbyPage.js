import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'
import {setPlayers} from '../store/actions/lobbies'
import {useDispatch, useSelector} from 'react-redux'
import {setLoading as setLoadingAction} from '../store/actions/lobbies'
import {fetchLobbiesActionCreator} from '../store/actions/lobbies'

const ENDOPOINT = 'http://195.38.164.24:8080'
const ENDOPOINT2 = 'http://localhost:1717'

const Lobby = () => {
  let {id} = useParams()

  const {isLoading, lobbies, time} = useSelector(state => ({
    isLoading: state.lobbies.isLoading,
    lobbies: state.lobbies.list,
    time: state.timer.time
  }))


  const [lobby, setLobby] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    // fetch(`${ENDOPOINT}/lobby/rates/${id}/`, {
    fetch(`${ENDOPOINT2}/list/${id}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setSuccess(true)
        setLobby(data)
        dispatch(setPlayers(data.player_list))
        dispatch(setLoadingAction(false))
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [isLoading])

  return (
    <PageTemplate>
      <div style={{minHeight: '50vh', position: 'relative'}}>
        { loading ? 
          <div className='loading'></div> : 
          success ?
          <LobbyPage 
            id={lobby.id}
            title={lobby.name}
            name_mode={lobby.map}
            date={time}
            time={lobby.time}
            priceGame={lobby.price}
            priceKill={lobby.kill_award}
            playerCount={lobby.playerCount}
            players={lobby.player_list}
          /> :
          <div className='error-fetch'>Обновите</div> 
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby