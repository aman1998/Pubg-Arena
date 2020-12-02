import React, {useState, useEffect} from 'react'
import {isPlayed as checkIsPlayed} from '../../store/actions/lobbies'
import {useDispatch} from 'react-redux'

const Timer = ({date, showPass}) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  const dispatch = useDispatch()


  useEffect(() => {
    const  countdownDateFormat = `${date}`.split("+")[0]
    const countdownDate = new Date(countdownDateFormat).getTime();

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const timer = window.setInterval(() => {
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if(distance < 0) {
        dispatch(checkIsPlayed(true))
        clearInterval(timer)
      } 
      else if(distance <= 600000) {
        showPass()
        dispatch(checkIsPlayed(false))
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
      else if (distance > 0) {
        dispatch(checkIsPlayed(false))
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000);
    return () => { // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, [timerSeconds]);


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