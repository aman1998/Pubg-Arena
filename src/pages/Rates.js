import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import PageTemplate from "../components/templates/PageTemplate";
import UserRatingItem from "../components/User/UserRatingItem";

import {setRatingsCreator} from "../store/actions/rates";

import backImg from '../assets/img/pubg-slide3.jpg'

const Rates = () => {
  const dispatch = useDispatch()
  const rates = useSelector(state => state.rates)

  useEffect(() => {
    if(rates.length === 0){
      dispatch(setRatingsCreator())
    }
  }, [dispatch, rates.length])

  return(
    <PageTemplate>
      <div className='rates-main'>
        <div className='rates-image-box'>
          <img src={backImg} alt='#' className='rates-main-image' />
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
      </div>
    </PageTemplate>
  )
}

export default Rates