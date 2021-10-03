import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Button from '../button';

const Card = () => {
  return (
    <Link to="/person-page/" className="card" title="To Person Page">
      <div className="card__image">
        <img
          className="card__img"
          src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
        />
      </div>
      <div className="card__name">Luke Skywalker</div>
      <div className="card__button">
        <Button label="В избранное" />
      </div>
    </Link>
  );
};

export default Card;
