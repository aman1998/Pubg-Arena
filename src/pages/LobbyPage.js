import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'
import {setOneLobbyActionCreator} from '../store/actions/lobbies'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../components/Loadings/Loading'
import Error from './500Page'

const Lobby = () => {
  let {id} = useParams()

  const {isLoading} = useSelector(state => ({
    isLoading: state.lobbies.isLoading,
  }))

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [lobby, setLobby] = React.useState({
    date: '0000-00-00T00:00:00+06:00'
  })
  const [error, setError] = React.useState(false)

  const dispatch = useDispatch()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    dispatch(setOneLobbyActionCreator(id, setLoading, setLobby, setError, setSuccess))
  }, [isLoading, id ])


  return (
    <PageTemplate>
      <div style={{minHeight: '50vh', position: 'relative'}}>
        { loading ? 
          <Loading /> :
          success ?
          <LobbyPage 
            id={lobby.id}
            name={lobby.name}
            map={lobby.map}
            date={lobby.date}
            image={lobby.image}
            time={lobby.time}
            players={lobby.player_list}
            priceGame={lobby.price}
            priceKill={lobby.kill_award}
            playerCount={lobby.playerCount}
            pass={lobby.passcode}
            lobby_id={id}
          /> : error ?
          <Error /> : null
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby