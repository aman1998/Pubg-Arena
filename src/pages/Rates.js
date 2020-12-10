import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import PageTemplate from "../components/templates/PageTemplate";
import UserRatingItem from "../components/User/UserRatingItem";

import {setRatingsCreator} from "../store/actions/rates";

import backImg from '../assets/img/pubg-slide3.jpg'
import { useTranslation } from 'react-i18next'
import Loading from '../components/Loadings/Loading'
import Error from './500Page'

const Rates = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {users, loading, failed, success} = useSelector(state => ({
    users: state.rates.users,
    loading: state.rates.get.loading,
    failed: state.rates.get.failed,
    success: state.rates.get.success
  }))

  useEffect(() => {
    if(users.length === 0){
      dispatch(setRatingsCreator())
    }
  }, [users.length]) // eslint-disable-line react-hooks/exhaustive-deps

  return(
    <PageTemplate>
        { loading ? 
          <Loading /> :
          success ?
          <div className='rates-main'>
            <div className='rates-image-box'>
              <img src={backImg} alt='#' className='rates-main-image' />
            </div>
            <h2 className='rating-title'>{t('Rates.1')}</h2>
            <div className='container'>
              <div className='rates-page'>
                {
                  users && users.map(item => (
                    <UserRatingItem
                      key={item.id}
                      id={item.id}
                      img={item.avatar}
                      name={item.name}
                      kills={`${item.total_kills} ${t('Rates.2')}`}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          : failed ?
          <Error /> : null
        }
    </PageTemplate>
  )
}

export default Rates