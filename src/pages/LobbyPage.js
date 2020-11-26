import React, {useState} from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'
import Logo from '../assets/icons/logo.svg'
import {setPlayers} from '../store/actions/lobbies'
import {useDispatch, useSelector} from 'react-redux'
import {setLoading as setLoadingAction} from '../store/actions/lobbies'
import Loading from '../components/Loadings/Loading'

const ENDOPOINT = 'http://195.38.164.24:8080'

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
    fetch(`${ENDOPOINT}/lobby/rates/${id}/`, {
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
          // <img src={Logo} alt='#' className='loading' /> :   
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
          /> :
          <div className='error-fetch'>Обновите</div> 
        }
      </div>
    </PageTemplate>
  )
}

export default Lobby