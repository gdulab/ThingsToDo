import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.row}>
                <div className={styles.menuLeft}>
                    <ul>
                        <li><Link to="/" className={styles.link}><i className="fa fa-bars"></i></Link></li>
                    </ul>
                </div>
                <div className={styles.menuRight}>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;