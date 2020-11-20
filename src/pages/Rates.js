import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

import PageTemplate from "../components/templates/PageTemplate";
import UserRatingItem from "../components/User/UserRatingItem";

import mainImage from '../assets/img/pubg-slide3.jpg'

const Rates = () => {
  const rates = useSelector(state => state.rates)
  const [usersRates] = useState(rates)

  const sortFucn = (users) => {
    users.sort((a, b) => {
      return b.kills - a.kills
    })
  }

  useEffect(() => {
    if(usersRates){
      sortFucn(usersRates)
    }
  }, [rates])
  return(
    <PageTemplate>
      <div className='rates-main-image-box'>
        <img src={mainImage} className='rates-main-image' alt='main-image' />
        <h1 className='title'>Выигрывай, зарабатывай и будь в топе</h1>
      </div>
      <h2 className='rating-title'>Рейтинг игроков</h2>
      <div className='container'>
        <div className='rates-page'>
          {
            usersRates && usersRates.map(item => (
              <UserRatingItem
                key={item.id}
                id={item.id}
                name={item.name}
                kills={item.kills}
              />
            ))
          }
        </div>
      </div>
    </PageTemplate>
  )
}

export default Rates