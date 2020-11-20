import React from 'react'
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserRating from '../components/User/UserRating'
// import CardIn from '../components/Card/CardIn'
import CardOut from '../components/Card/CardOut'
import CardIn from "../components/Card/CardIn";

const Profile = () => {
  const {loading, success} = useSelector(state => ({
    loading: state.profile.get.loading,
    success: state.profile.get.success,
  }))

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageTemplate class='footer-profile'>
      { loading ? <div className='loading'>sdsd</div> :
        success ?
          <div key='1' className='container profile'>
            <Sidebar/>
            <div className='content'>
              <Route path='/profile' exact>
                <UserRating/>
              </Route>
              <Route path='/profile/settings' exact>
                <div>Настройки</div>
              </Route>
              <CardIn />
              <CardOut />
            </div>
          </div> 
        : <div>Обновите</div> 
      }
    </PageTemplate>
  )
}

export default Profile