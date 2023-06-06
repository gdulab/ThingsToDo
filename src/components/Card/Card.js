import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss'
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    
    return (
        <li className={styles.card}>{props.title}
            <button
                type="button"
                onClick={e => dispatch(toggleCardFavorite(props.id))}
                className={clsx(props.isFavourite && styles.active)}>
                <i className="fa fa-star-o"></i>
            </button>
        </li>
    )
}

export default Card;