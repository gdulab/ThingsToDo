import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from'../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchSting } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const search = e => {
        e.preventDefault();
        dispatch(updateSearchSting(searchString));
    }

    return (
        <form className={styles.searchForm} onSubmit={search} >
            <TextInput placeholder="Search..." onChange={e => setSearchString(e.target.value)} />
            <Button>
                <span className='fa fa-search' />
            </Button>
        </form>
    );
  };

  export default SearchForm;