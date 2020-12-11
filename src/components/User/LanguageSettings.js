import React from 'react'
import { useTranslation } from 'react-i18next'
import {useSelector, useDispatch} from 'react-redux'
import {getLanguage} from '../../store/actions/language'

const LanguageSettings = () => {
  const { t, i18n } = useTranslation();

  const {language} = useSelector(state => ({
    language: state.language.language
  }))

  const dispatch = useDispatch()

  const handleClick = (lang) => {
    dispatch(getLanguage(lang))
    i18n.changeLanguage(lang)

  }

  return(
    <div className='user-language-settings'>
      <h2>{t('Profile.settings.7')}</h2>
      <div className='languages'>
        <div
          className={language === 'ru' ? 'language ru' : 'language'}
          onClick={() => handleClick('ru')}
        >
          Русский
        </div>
        <div
          className={language === 'en' ? 'language en' : 'language'}
          onClick={() => handleClick('en')}
        >
          English
        </div>
        <div
          className={language === 'kg' ? 'language kg' : 'language'}
          onClick={() => handleClick('kg')}
        >
          Кыргызча
        </div>
      </div>
    </div>
  )
}

export default LanguageSettings