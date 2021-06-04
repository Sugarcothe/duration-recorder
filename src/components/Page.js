import React, {useRef, useEffect, useState} from 'react';
import '../index.css';


const Page = () => {
  const [timerYears, setTimerYears] = useState('00')
  const [timerDays, setTimerDays] = useState('00')
  const [timerhours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  

  const presentDate = () => {
    new Date()
  }


  const startCountdown = () => {
    const now = new Date().getTime()
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const years = days * 365;
    const d = new Date();
    const t= d.getTime();
    
      const y = Math.round(t / years);
      const dd = Math.round(t / days);
      const h = Math.round(t / hours);
      const m = Math.round(t / minutes);

      const handleSubmit = () => {
        setTimerYears(y)
        setTimerDays(dd)
        setTimerHours(h)
        setTimerMinutes(m)
        setTimerSeconds(m)
      }

  } 

  return (
    <div className='container align-center mb-5'>
      <div className='mb-5 text-center'>
        <h2>BirthMomentó<i class="fas fa-stopwatch"></i></h2>
        <p>Today is </p>
      </div>
      
      {/* Duration Input */}
      <form onSubmit={handleSubmit(submitForm)} className='date' action=""> 
        <h4 className=''>Pick your date of birth below</h4>
          <input type="date" id="birthday" name="birthday"/>
          <input className='btn btn-sm btn-dark' type="submit" />
      </form>

      {/* Duration */}
      <div className='memento'>
        <h5 className='display-bold'>You have lived</h5>
        <p>Years: {timerYears}</p>
        <p>Days: {timerDays}</p>
        <p>hours: {timerhours}</p>
        <p>Minutes: {timerMinutes}</p>
        <p>seconds: {timerSeconds}</p>
      </div>


      {/* Footer */}
      {/* <h4>This app was built byValentine</h4> */}
      

    </div>
  )
}

export default Page
