import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHistory } from '../../store/authorizationSlice';
import { changeFilter } from '../../store/peopleSlice';
import Button from '../button/button';
import './search-panel.css';

const SearchPanel = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(search));
  }, [search, dispatch]);

  const onSearchClick = (evt) => {
    if (!search) {
      evt.preventDefault();
    }
    dispatch(addHistory(search));
  };

  return (
    <form className="search-panel" onSubmit={onSearchClick}>
      <input
        className="search-panel__input"
        type="text"
        placeholder="Пожалуйста, введите имя персонажа"
        value={search}
        onChange={(evt) => {
          setSearch(evt.target.value);
        }}
      />

      <Link to={`/search=${search}`} className="search-panel__button">
        <Button label="Полный поиск" onClick={onSearchClick} />
      </Link>
    </form>
  );
};

export default SearchPanel;
