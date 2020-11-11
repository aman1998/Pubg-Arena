import React, {useEffect, useState} from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import LobbyContainer from '../components/Lobbies/LobbyContainer'
import {useParams} from 'react-router'
import {useSelector} from "react-redux";

const LobbyPage = () => {
  let {id} = useParams()
  const [current, setCurrent] = useState('')
  const lobbies = useSelector(state => state.lobbies.list)

  useEffect(() => {
    // fetch(`http://localhost:1717/lobby/rates/${id}`, {
    //   method: 'GET',
    // })
    //   .then((response) => {
    //     console.log(response)
    //     response.json()
    //
    //   })
    //   .then((data) => {
    //     console.log('lobby one', data)
    //   })
    for(let i = 0; i < lobbies.length; i++ ){
      if(lobbies[i].id === id){
        setCurrent(lobbies[i])
      }
    }
  }, [])


  return (
    <PageTemplate>
      <div style={{minHeight: '50vh', position: 'relative'}}>
        <LobbyContainer
          title={current.title}
          name_mode={current.name}
          date={current.date}
          time={current.time}
          priceGame={current.price}
          priceKill={current.kill_award}
          playerCount={current.player_count}
        />
      </div>
    </PageTemplate>
  )
}

export default LobbyPage