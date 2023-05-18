import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon</span>.</h2>
                <p className={styles.description}>Intresting things I want to check out</p>
            </header>
            <section className={styles.columns}>
                <Column name="Books" icon="book"/>
                <Column name="Movies" icon="film"/>
                <Column name="Games" icon="gamepad"/>
            </section>
        </div>
    )
}

export default List;