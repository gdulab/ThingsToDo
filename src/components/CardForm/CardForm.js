import styles from './CardForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';

const CardForm = props => {

    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId );
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

