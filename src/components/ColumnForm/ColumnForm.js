import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    }
    
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.textInput}>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
            <span className={styles.textInput}>Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;