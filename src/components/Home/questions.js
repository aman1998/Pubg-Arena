import React from 'react'
import Chevron from '../../assets/icons/chevron'
import { ThemeProvider } from "styled-components"

const Questions = () => {
  const [answer1, setAnswer1] = React.useState(false)
  const [answer2, setAnswer2] = React.useState(false)
  const [answer3, setAnswer3] = React.useState(false)
  const [answer4, setAnswer4] = React.useState(false)

  return (
    <section className='questions container'>
      <h1> Часто задаваемые вопросы</h1>
      <div className='item'>
        <div className='question' onClick={() => setAnswer1(!answer1)}><Chevron answer={answer1}/>Как участовать в турнире?</div>
        {answer1 ?<p className='answer'>Зарегистрируйтесь. Выберите интересующий вас турнир во вкладке «Турниры» в левом верхнем углу и нажмите кнопку «Участвовать». Система предложит вам приобрести билеты. После того, как вы это сделаете, вы будете считаться участником турнира. Инструкции для входа на Турнир будут доступны на странице Турнира, на который вы зарегистрировались, за 10-15 минут до его начала.</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer2(!answer2)}><Chevron answer={answer2}/>Стоимость турнира?</div>
        {answer2 ?<p className='answer'> Стоимость игры от 100 сом</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer3(!answer3)}><Chevron answer={answer3}/>За какое время начисляются призовые?</div>
        {answer3 ?<p className='answer'>Деньги начисляются на ваш баланс в Arena в течение часа после окончания турнира.</p> : null}
      </div>
      <div className='item'>
        <div className='question' onClick={() => setAnswer4(!answer4)}><Chevron answer={answer4}/>Можно ли играть командой или одиночная игра?</div>
        {answer4 ?<p className='answer'>Можно, всё актуальное расписание найдёте на главной странице сайта.</p> : null}
      </div>
    </section>
  )
}

export default Questions