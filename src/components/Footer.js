import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <h1>WEATHERAPP <br/><span>@Ashfaq</span></h1>
        <div className={classes.lists}>
            <ul className={classes.links}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#cities'>Cities</a>
                </li>
                <li>
                    <a href='news'>News</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='/'>Contact us</a>
                </li>
                <li>
                    <a href='/'>FAQs</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer