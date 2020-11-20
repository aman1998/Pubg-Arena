import React from 'react'
import Slider from 'react-elastic-carousel'

import TournamentSlide from "../components/Events/TournamentSlide"

const TournamentSlider = (props) => {
  const breakPoints = [
    {width: 100, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 800, itemsToShow: 3},
    {width: 1100, itemsToShow: 4}
  ]

  return(
    <Slider
      breakPoints={breakPoints}
      showArrows={false}
    >
      {
        props.list ? props.list.map((item) => (
          <TournamentSlide
            key={item.id}
            id={item.id}
            image={item.image}
            date={item.date}
            name={item.name}
            players={item.player_list}
          />
        )) : 'hello'
      }
    </Slider>
  )
}

export default TournamentSlider