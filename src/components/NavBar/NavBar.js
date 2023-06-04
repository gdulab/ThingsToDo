import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
                <div className={styles.row}>
                    <div className={styles.menuLeft}>
                        <a href="/" className={styles.link}><i className="fa-solid fa-list-check"></i>TEXT</a>
                    </div>
                    <div className={styles.menuRight}>
                        <a href="/" className={styles.link}>Home</a>
                        <a href="/favorite" className={styles.link}>Favorite</a>
                        <a href="/about" className={styles.link}>About</a>
                    </div>
                </div>
        </div>
    );
}

export default NavBar;