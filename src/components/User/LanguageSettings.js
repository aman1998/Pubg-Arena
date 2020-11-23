import React, {useState} from 'react'

const LanguageSettings = () => {
  const [lan, setLan] = useState('kg')
  return(
    <div className='user-language-settings'>
      <h2>Выберите язык</h2>
      <div className='languages'>
        <div
          className={lan === 'kg' ? 'language kg' : 'language'}
          onClick={() => setLan('kg')}
        >
          Кыргызский
        </div>
        <div
          className={lan === 'ru' ? 'language ru' : 'language'}
          onClick={() => setLan('ru')}
        >
          Русский
        </div>
        <div
          className={lan === 'en' ? 'language en' : 'language'}
          onClick={() => setLan('en')}
        >
          English
        </div>
        <div
          className={lan === 'kz' ? 'language kz' : 'language'}
          onClick={() => setLan('kz')}
        >
          Казахский
        </div>
        <div
          className={lan === 'tr' ? 'language tr' : 'language'}
          onClick={() => setLan('tr')}
        >
          Turkish
        </div>
      </div>
    </div>
  )
}

export default LanguageSettings