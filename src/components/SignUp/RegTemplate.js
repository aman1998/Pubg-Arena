import React, {useState} from 'react'
import Register from './Register'
import Phone from '../UI/Login/Phone'
import Activate from './Activate'
import axios from "../../axios/axios";
import Header from './Header'

const RegTemplate = () => {
  const [phone, getPhone] = React.useState('')
  const [showPhone, setShowPhone] = React.useState(true)
  const [showActivate, setShowActivate] = React.useState(false)
  const [showRegisterContainer, setShowRegisterContainer] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // const handlePhone = (body) => {
  //   axios.post('/validate/', body)
  //     .then((res) => {
  //       console.log(res.data)
  //       setPhone(body.phone)
  //       setShowActivate(true)
  //       setShowPhone(false)
  //     })
  //     .catch(e => console.log(e))
  // }

  return (
    <div className='signUp'>
      {
        isLogged ? (
          <h2>Вы зарегистрированы</h2>
        ) : (
          <>
            <Header title='Регистрация'/>
            {
              showPhone ? (
                <Phone
                  getPhone={getPhone}
                  // handlePhone={handlePhone}
                  showActivate={setShowActivate}
                  showPhone={setShowPhone}
                />
              ) : showActivate ? (
                <Activate
                  phone={phone}
                  showActivate={setShowActivate}
                  showReg={setShowRegisterContainer}
                />
              ) : showRegisterContainer ?
                <Register showRegistered={setIsLogged} phone={phone}/> : null
            }

          </>

        )
      }
    </div>
}

export default RegTemplate

