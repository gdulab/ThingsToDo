import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import Container from '../Container/Container'
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'
import { getFavouriteCards } from '../../redux/cardsReducer';

const Favorite = () => {
    const cards = useSelector(getFavouriteCards);
    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                {cards.length ? (
                    <ul className={styles.cards}>
                        {
                            cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavourite={card.isFavourite} />)
                        }
                    </ul>
                ) : (
                    <p>No favourite cards</p>
                )}
            </article>
        </Container>
    )
}

export default Favorite;