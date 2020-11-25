import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import PageTemplate from "../components/templates/PageTemplate";
import UserRatingItem from "../components/User/UserRatingItem";

import mainImage from '../assets/img/pubg-slide3.jpg'
import {setRatingsCreator} from "../store/actions/rates";

const Rates = () => {
  const dispatch = useDispatch()
  const rates = useSelector(state => state.rates)

  useEffect(() => {
    dispatch(setRatingsCreator())
  }, [])
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
            rates && rates.map(item => (
              <UserRatingItem
                key={item.id}
                id={item.id}
                img={item.avatar}
                name={item.name}
                kills={item.total_kills}
              />
            ))
          }
        </div>
      </div>
    </PageTemplate>
  )
}

export default Rates