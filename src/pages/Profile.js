import React from 'react'
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserRating from '../components/User/UserRating'
import CardOut from '../components/Card/CardOut'
import CardIn from "../components/Card/CardIn";
import PasswordSettings from "./PasswordSettings";
import LanguageSettings from "../components/User/LanguageSettings";
import UserRatingKills from "../components/User/UserRatingKills";

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
                <PasswordSettings />
              </Route>
              <CardIn />
              <CardOut />
              <Route path='/profile/language' exact>
                <LanguageSettings />
              </Route>
              <Route path='/profile/rating' exact>
                <UserRatingKills />
              </Route>
            </div>
          </div> 
        : <div>Обновите</div> 
      }
    </PageTemplate>
  )
}

export default Profile