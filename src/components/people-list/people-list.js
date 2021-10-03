import React from 'react';
import Button from '../button/button';
import './people-list.css';

const PeopleList = () => {
  return (
    <div className="people-list">
      <div className="people-card">
        <div className="people-card__image">
          <img
            className="people-card__img"
            src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
          />
        </div>
        <div className="people-card__name">Luke Skywalker</div>
        <div className="people-card__button">
          <Button label="В избранное" />
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
