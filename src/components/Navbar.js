
import classes from './Navbar.module.css'

const Navbar = () => {

    return (
            <nav className={classes.navbar}>
                <ul >
                    <li className={classes.navItem}>
                        <a href='/'>Home</a>
                    </li>
                    <li className={classes.navItem}>
                        <a href='#cities' >Cities</a>
                    </li>
                    <li className={classes.navItem}>
                        <a href='#news' >News</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar