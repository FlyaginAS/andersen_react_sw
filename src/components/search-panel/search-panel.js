import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
  };

  return (
    <div className="search-panel">
      <input
        сlassName="search-panel__input"
        type="text"
        placeholder="Пожалуйста, введите имя персонажа"
        value={search}
        onChange={(evt) => {
          setSearch(evt.target.value);
        }}
      />

      <Link to={`/search=${search}`} className="search-panel__button">
        <Button label="Поиск" onClick={onSearchClick} />
      </Link>
    </div>
  );
};

export default SearchPanel;
