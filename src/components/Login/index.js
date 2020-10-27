import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getName as getNameAction } from '../../store/actions/'
import styles from './styles.module.scss'
import Logo from '../../assets/icons/logo.svg'
import Cancel from '../../assets/icons/cancel'

const Login = ({showLogin}) => {
  const { name } = useSelector((state) => ({
    name: state.auth.name,
  }))

  const dispatch = useDispatch()
  const getName = (name) => dispatch(getNameAction(name))

  return (
    <div className={styles.block}>
      <div onClick={() => getName('Esen')}>+400 хп за регистрацию</div>
      <div className={styles.blockHeader}>
        <img src={Logo} alt='#' />
        <div>Добро пожаловать в Arenum</div>
        <div>Нажимая кнопку, вы соглашаетесь с Условиями использования и Политикой конфиденциальности
и подтверждаете, что вам есть 18 лет.</div>
      </div>
      <form className={styles.blockForm}>
        <label htmlFor='name'>
          <input 
            name='name'
            placeholder='name'
            onChange={(e) => getName(e.target.value)}
          />
        </label>
        <label htmlFor='surname'>
          <input 
            name='surname'
            placeholder='surname'
          />
        </label>
        <label htmlFor='phone'>
          <input 
            name='phone'
            placeholder='phone'
          />
        </label>
        <button className={styles.blockFormBtn}>Регистрация</button>

        {/* Иконка закрытия блока */}
        <div className={styles.cancel} onClick={showLogin}><Cancel /></div>
      </form>
    </div> 
  )
}

export default Login
