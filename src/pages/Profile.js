import React  from 'react'
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import PageTemplate from '../components/templates/PageTemplate'
import Sidebar from '../components/layout/Sidebar'
import UserRating from '../components/User/UserRating'
import CardOut from '../components/Card/CardOut'
import CardIn from "../components/Card/CardIn"
import UserRatingKills from "../components/User/UserRatingKills"
import ChangeProfile from "../components/User/ChangeAvatar/ChangeProfile"
import LoadingPage from '../components/Loadings/Loading'
import ErrorPage from './500Page'

const Profile = () => {
  const {loading, success, isLogged} = useSelector(state => ({
    loading: state.profile.get.loading,
    success: state.profile.get.success,
    isLog: state.isLogged
  }))

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <PageTemplate class='footer-profile'>
      { loading ? <LoadingPage /> :
        success ?
          <div key='1' className='container profile'>
            <Sidebar/>
            <div className='content'>
              <Route path='/profile' exact>
                <UserRating/>
              </Route>
              <Route path='/profile/settings' exact>
                <ChangeProfile />
              </Route>
              <Route path='/profile/cardIn' exact>
                <CardIn />
              </Route>
              <Route path='/profile/cardOut' exact>
                <CardOut />
              </Route>
              <Route path='/profile/rating' exact>
                <UserRatingKills />
              </Route>
            </div>
          </div>
        : !isLogged ? <div className='container' style={{marginTop: '10px'}}></div> : <ErrorPage />
      }
    </PageTemplate>
  )
}

export default Profile
