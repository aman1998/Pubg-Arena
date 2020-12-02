import React from 'react'

const Players = (props) => {

  return (
    <div className='lobby-right players-list'>
      <h2 className='title'>Участники</h2>
      {
        props.players ? props.players.map((item, index) => {
          return <div className='player' key={item.id}> {index + 1}. {item.name}</div>
        }) : null
      }
    </div>
  )
}

export default Players