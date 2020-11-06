import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/lobby'
import {useParams} from 'react-router'

const ENDOPOINT = 'http://localhost:1717'

const Lobby = () => {
  let {id} = useParams()

  const [lobby, setLobby] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    fetch(`${ENDOPOINT}/list/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setLobby(data)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [])


  return (
    <PageTemplate>
      <div style={{minHeight: '50vh', position: 'relative'}}>
        {loading && !error ? 
          <div className='loading'></div> : !loading && !error ?
          <LobbyPage 
            title={lobby.title}
            name_mode={lobby.name_mode}
            date={lobby.date}
            time={lobby.time}
            priceGame={lobby.priceGame}
            priceKill={lobby.priceKill}
            playerCount={lobby.playerCount}
          /> : !loading && error ?
          <div className='error'>Обновите</div> : null
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby