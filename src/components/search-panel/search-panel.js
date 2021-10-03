import React from 'react';
import Button from '../button/button';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input
        сlassName="search-panel__input"
        type="text"
        placeholder="Пожалуйста, введите имя персонажа"
      />
      <div className="search-panel__button">
        <Button label="Поиск" />
      </div>
    </div>
  );
};

export default SearchPanel;
