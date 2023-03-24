import React from 'react'
import Navbar from './Navbar';
import classes from "./weather.module.css"

const weather = (props) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dateObject= new Date();
  const day=weekday[dateObject.getDay()]
  const date= dateObject.getDate()+'/'+(dateObject.getMonth()+1)+ '/' + dateObject.getFullYear();
  const displayTime= dateObject.getHours()+':' + dateObject.getMinutes()

  return (
    props.isLoading ? <h1>.</h1>:
    <div className={classes.weather}>
      <Navbar/>
      <div className={classes.top}>
        <div></div>
        <div className={classes.Details}>
          <h1>Weather Deatils</h1>
          <div>
            <div className={classes.inner}>
              <p>Cloudy</p>
              <span>{props.weather.clouds.all}%</span>
            </div>
            <div className={classes.inner}>
              <p>Humidity</p>
              <span>{props.weather.main.humidity}%</span>
            </div>
            <div className={classes.inner}>
              <p>Wind</p>
              <span>{props.weather.wind.speed}km/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <p style={{fontSize: '8rem'}}>{Math.floor(`${props.weather.main.temp}`-273.15)}°</p>
        
        <div className={classes.today}>
          <h1>{props.weather.name}</h1>
          <p>{displayTime+' ' + day + ' ' + date.toString()}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      </div>
    </div>
  )
}

export default weather