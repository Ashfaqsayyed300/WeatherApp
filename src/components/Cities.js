import React, { useEffect, useState } from 'react'
import classes from './Cities.module.css'
import sunny from '../assets/sunny.jpg'
import cloudy from '../assets/cloudy.jpg'
import thunder from '../assets/thunder.jpg'
import earth from '../assets/earth.jpg'

const Cities = () => {
    const [delhi, setDelhi]= useState([]);
    const [chennai, setChennai]= useState([]);
    const [jaipur, setJaipur]= useState([]);

    const [isLoading, setIsLoading]= useState(true);

    const dateObject= new Date();
    const date= dateObject.getDate()+'/'+(dateObject.getMonth()+1)+ '/' + dateObject.getFullYear();

    useEffect(()=>{
      const fetchHandler= async ()=>{
        const data1= await fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=07869fa2579e2ab3ea7d13cfbbdf6537')
        const data2= await fetch('https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=07869fa2579e2ab3ea7d13cfbbdf6537')
        const data3= await fetch('https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=07869fa2579e2ab3ea7d13cfbbdf6537')
        const responseData1= await data1.json();
        const responseData2= await data2.json();
        const responseData3= await data3.json();
        setDelhi(responseData1);
        setChennai(responseData2)
        setJaipur(responseData3)

        setIsLoading(false);
      }
      fetchHandler();    
    },[])

  return (
    <div id='cities'>
        <h1 style={{fontSize: '3rem', textAlign:'center'}}>Cities</h1>
        {isLoading ? <h1>...</h1>:
            <div className={classes.container}>
                <div className={classes.card}>
                <img className={classes.image} src={thunder} alt='main-img'/>
                <h3 className={classes.climate}>Thunder</h3>
            <div className={classes.info}>
                <h1 style={{fontSize: '4.2rem'}}>{Math.floor(`${delhi.main.temp}`-273.15)}°</h1>
                <div className={classes.nameInfo}>
                    <h3>{delhi.name}</h3>
                    <p>{date.toString()}</p>
                </div>
            </div>
            </div>

            <div className={classes.card}>
                <img className={classes.image} src={cloudy} alt='main-img'/>
                <h3 className={classes.climate}>Cloudy</h3>
            <div className={classes.info}>
                <h1 style={{fontSize: '4.2rem'}}>{Math.floor(`${chennai.main.temp}`-273.15)}°</h1>
                <div className={classes.nameInfo}>
                    <h3>{chennai.name}</h3>
                    <p>{date.toString()}</p>
                </div>
            </div>
            </div>

            <div className={classes.card}>
                <img className={classes.image} src={sunny} alt='main-img'/>
                <h3 className={classes.climate}>Sunny</h3>
            <div className={classes.info}>
                <h1 style={{fontSize: '4.2rem'}}>{Math.floor(`${jaipur.main.temp}`-273.15)}°</h1>
                <div className={classes.nameInfo}>
                    <h3>{jaipur.name}</h3>
                    <p>{date.toString()}</p>
                </div>
            </div>
            </div>
            </div>
        }
        <div className={classes.search}>
            
            <input placeholder='Search city'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
        <img src={earth} id='earth' style={{width:'100%',height: '90vh'}} alt='earth'/>
    </div>
  )
}

export default Cities