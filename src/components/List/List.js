import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useDispatch, useSelector } from 'react-redux';
import { getListById, getColumsByList, updateSearchString } from '../../redux/store';
import { Navigate, useParams } from 'react-router-dom';
import SearchForm from "../SearchForm/SearchForm";
import { useEffect } from 'react';

const List = () => {
    const dispatch = useDispatch();
    const { listId } = useParams();
    const filteredColumns = useSelector(state => getColumsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));

    useEffect(() => {
        dispatch(updateSearchString(''));
    }, [dispatch]);

    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {filteredColumns.map(column =>
                    <Column
                        key={column.id}
                        {...column} />
                )}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    )
}

export default List;