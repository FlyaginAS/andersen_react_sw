import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Button from '../button';

const Card = ({ person: { id, name } }) => {
  return (
    <Link
      to="/person-page/1/films"
      className="card"
      title="To Person Page"
    >
      <div className="card__image">
        <img
          className="card__img"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
      </div>
      <div className="card__name">{name}</div>
      <div className="card__button">
        <Button label="В избранное" />
      </div>
    </Link>
  );
};

export default Card;
