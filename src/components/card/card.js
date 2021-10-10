import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import Button from '../button';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../store/authorizationSlice';

const Card = ({ person: { id, name } }) => {
  const dispatch = useDispatch();
  const onButtonClick = (evt) => {
    evt.preventDefault(); //отменяем действие линка
    dispatch(addFavorites(id));
  };

  return (
    <Link
      to={`/person-page/${id}/films`}
      className="card"
      title="To Person Page"
    >
      <div className="card__image">
        <img
          className="card__img"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person"
        />
      </div>
      <div className="card__name">{name}</div>
      <div className="card__button">
        <Button label="В избранное" onClick={onButtonClick} />
      </div>
    </Link>
  );
};

export default Card;
