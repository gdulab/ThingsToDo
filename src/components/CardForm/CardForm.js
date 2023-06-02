import styles from './CardForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const dispatch = useDispatch();
    const columnId = props.columnId;
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', payload: {title, columnId}})
        setTitle('');
    }

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <span className={styles.TextInput}><TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
            <Button>Add</Button>
        </form>
    )
}

export default CardForm;

