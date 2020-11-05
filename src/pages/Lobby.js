import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/lobby'
import {useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import {getLobbiesList } from '../store/actions/lobbies';

const ENDOPOINT = 'http://localhost:1717'

const Lobby = () => {
  let {id} = useParams()

  const [lobby, setLobby] = React.useState('')

  const { lobbies } = useSelector(state => ({
    lobbies: state.lobbies.list
  }))

  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${ENDOPOINT}/list`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        dispatch(getLobbiesList(data))
      })
      .then(() => {
          lobbies.map(item => {
            if(item.id === id){
              setLobby(item)
            }
          })
      })
  }, [])


  
  return (
    <PageTemplate>
      <LobbyPage 
        title={lobby.title}
        name_mode={lobby.name_mode}
        date={lobby.date}
        time={lobby.time}
        priceGame={lobby.priceGame}
        priceKill={lobby.priceKill}
        playerCount={lobby.playerCount}
      />
    </PageTemplate>
  )
}

export default Lobby