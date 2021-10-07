import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/peopleSlice';
import Button from '../button/button';
import './search-panel.css';

const SearchPanel = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(search));
  }, [search, dispatch]);

  const onSearch = () => {};

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
      <div className="search-panel__button">
        <Button label="Поиск" onClick={onSearch} />
      </div>
    </div>
  );
};

export default SearchPanel;
