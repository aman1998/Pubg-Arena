import React from 'react'
import { Route } from 'react-router-dom'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyPage from '../components/Lobbies/lobby'
import {useSelector} from 'react-redux'

const Lobby = () => {
  const { lobbies } = useSelector(state => ({
    lobbies: state.lobbies.list
  }))

  console.log(lobbies)
  
  return (
    <PageTemplate>
      {lobbies.map(item => (
        <Route path={`/lobby-${item.id}`} key={item.id} exact>
          <LobbyPage 
            title={item.title}
            name_mode={item.name_mode}
            date={item.date}
            time={item.time}
            priceGame={item.priceGame}
            priceKill={item.priceKill}
            playerCount={item.playerCount}
          />
        </Route>
      ))}
    </PageTemplate>
  )
}

export default Lobby