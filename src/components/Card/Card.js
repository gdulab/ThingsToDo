import { useDispatch } from 'react-redux';
import styles from './Card.module.scss'
import clsx from 'clsx';
import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';

const Card = props => {
    const dispatch = useDispatch();
    return (
        <li className={styles.card}>{props.title}
            <div>
                <button
                    type="button"
                    onClick={e => dispatch(toggleCardFavorite(props.id))}
                    className={clsx(props.isFavourite && styles.active)}
                >
                    <i className="fa fa-star-o"></i>
                </button>
                <button
                    type="button"
                    onClick={e => dispatch(removeCard(props.id))}
                >
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default Card;