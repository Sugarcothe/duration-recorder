import React, { useState } from 'react';
import '../index.css';


const Page = React.memo(props => {
  const [inputState, inputStateUpdate ] = useState('')

  const [yearsDuration, setYearsDuration] = useState('00')
  const [weeksDuration, setWeeksDuration] = useState('00')
  const [daysDuration, setDaysDuration] = useState('00')
  const [hoursDuration, setHoursDuration] = useState('00')
  const [minutesDuration, setMinutesDuration] = useState('00')
  const [secondsDuration, setSecondsDuration] = useState('00')

  const timeDuration = () => {
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let weeks = days * 7;
    let years = days * 365;
    let d = new Date();
    let t= d.getTime() / 60;
    let setMinutesDuration = d.getTime() / 60;
    let setSecondsDuration = d.getTime() / 60 * 60;
  
    const setYearsDuration = Math.round(t / years);
    const setWeeksDuration = Math.round(t / weeks)
    const setDaysDuration = Math.round(t / days)
    const setHoursDuration = Math.round(t / hours);
    
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className='container align-center'>
      <div className='text-center mt-5'>
        <h2 className='text-warning'>BirthMomentó<i className="fas fa-stopwatch text-danger"></i></h2>
        <p>Today is </p>
      </div>
      
      {/* Duration Input */}
      <div className='border border-warning'>
        <form onSubmit={handleSubmit} className='date text-center ' action=""> 
          <h4 className='mt-5 align-center text-warning'>Pick your date of birth below</h4>
            <input type="date" id="birthday" name="birthday" 
            value={inputState} 
            onChange={event => {
              inputStateUpdate(event.target.value)
           }}
            />
            <input className='btn btn-sm btn-warning m-2' type="submit"/>
        </form>

        {/* Duration */}
        <div className='memento p-3 mt-5'>
          <h4 className='display-bold text-warning'>You have lived</h4>
          <h5>Years: {yearsDuration} years</h5>
          <h5>Weeks: {weeksDuration} weeks</h5>
          <h5>Days: {daysDuration} days</h5>
          <h5>hours: {hoursDuration} hours</h5>
          <h5>Minutes: {minutesDuration} minutes</h5>
          <h5>seconds: {secondsDuration} seconds</h5>
        </div>

      </div>
      

      {/* Footer */}
      {/* <h4>This app was built byValentine</h4> */}
      

    </div>
      
  )
}) 

export default Page
