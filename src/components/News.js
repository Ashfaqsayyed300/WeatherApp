import React from 'react'
import classes from './News.module.css'

import sunny from '../assets/sunny.jpg'
import cloudy from '../assets/cloudy.jpg'
import thunder from '../assets/thunder.jpg'

const News = () => {
  return (
    <div id='news' style={{margin: '5rem 0rem'}}>
        <h1 style={{fontSize: '3rem', textAlign:'center'}}>News</h1>
        <div className={classes.container}>
            <div className={classes.card}>
                <img className={classes.image} src={thunder} alt='main-img'/>
                <h3 className={classes.climate}>Thunder Strikes <br/>Delhi</h3>
                <div className={classes.actions}>
                  <button className={classes.btn}>Read more</button>
                </div>
            </div>

            <div className={classes.card}>
                <img className={classes.image} src={cloudy} alt='main-img'/>
                <h3 className={classes.climate}>Cloudstorms in <br/>manipur</h3>
                <div className={classes.actions}>
                  <button className={classes.btn}>Read more</button>
                </div>
            </div>

            <div className={classes.card}>
                <img className={classes.image} src={sunny} alt='main-img'/>
                <h3 className={classes.climate}>It's Summer season <br/>in Mumbai</h3>
                <div className={classes.actions}>
                  <button className={classes.btn}>Read more</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default News