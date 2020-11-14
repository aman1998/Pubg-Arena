import React, {useState, useRef, useEffect} from 'react'

const Timer = (props) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();

    const startTimer = () => {
      const  countdownDateFormat = `${props.date}`.split("+")[0]
      const countdownDate = new Date(countdownDateFormat).getTime();

      interval = setInterval(()=> {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if(distance < 0) {
          clearInterval(interval.current)
        } else {
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
        
      }, 1000)
    }
    useEffect(()=> {
      startTimer()
      let someref = interval.current
      return ()=> {
        clearInterval(someref)
      }
    })

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