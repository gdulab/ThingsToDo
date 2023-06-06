import { useDispatch } from 'react-redux'
import styles from './ListForm.module.scss'
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.textInput}>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
            <span className={styles.textInput}>Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} /></span>
            <Button>Add list</Button>
        </form>
    );
}

export default ListForm;