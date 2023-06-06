import { useSelector } from 'react-redux';
import { getFavouriteCards } from '../../redux/store';
import Card from '../Card/Card';
import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'

const Favorite = () => {
    const cards = useSelector(getFavouriteCards);
    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavourite={card.isFavourite}/>)}
                </ul>
            </article>
        </Container>
    )
}

export default Favorite;