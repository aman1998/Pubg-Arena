import React, {useState, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'

const Timer = (props) => {
  const {game} = useSelector(state => ({
    game: state.lobby.lobby
  }))
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef()

  const startTimer = () => {
    const countdownDateFormat = `${props.date}`.split("+")[0]
    const countdownDate = new Date(countdownDateFormat).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
        // setTimerDays('00')
        // setTimerHours('00')
        // setTimerMinutes('00')
        // setTimerSeconds('00')
      } else {
        setTimerDays(days.toString())
        setTimerHours(hours.toString())
        setTimerMinutes(minutes.toString())
        setTimerSeconds(seconds.toString())
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  }, [timerSeconds])
  return (
    <section className='timer'>
      <div className='block'>
        <div className='count'>{timerDays}</div>
        <div className='value'>дней</div>
      </div>
      <div>:</div>
      <div className='block'>
        <div className='count'>{timerHours}</div>
        <div className='value'>часов</div>
      </div>
      <div>:</div>
      <div className='block'>
        <div className='count'>{timerMinutes}</div>
        <div className='value'>минут</div>
      </div>
      <div>:</div>
      <div className='block'>
        <div className='count'>{timerSeconds}</div>
        <div className='value'>секунд</div>
      </div>
    </section>
  )
}

export default Timer