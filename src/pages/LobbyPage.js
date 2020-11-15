import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'
import {setPlayers} from '../store/actions/lobbies'
import {useDispatch, useSelector} from 'react-redux'
import {setLoading as setLoadingAction} from '../store/actions/lobbies'

const ENDOPOINT = 'http://195.38.164.24:8080'

const Lobby = () => {
  let {id} = useParams()

  const {isLoading} = useSelector(state => ({
    isLoading: state.lobbies.isLoading,
  }))

  const [lobby, setLobby] = React.useState({
    date: '0000-00-00T00:00:00+06:00'
  })
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${ENDOPOINT}/lobby/rates/${id}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
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
        {loading && !error ? 
          <div className='loading'></div> : !loading && !error ?
          <LobbyPage 
            id={lobby.id}
            name={lobby.name}
            map={lobby.map}
            date={lobby.date}
            time={lobby.time}
            priceGame={lobby.price}
            priceKill={lobby.kill_award}
            playerCount={lobby.playerCount}
            pass={lobby.passcode}
            players={lobby.player_list}
          /> : !loading && error ?
          <div className='error-fetch'>Обновите</div> : null
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby