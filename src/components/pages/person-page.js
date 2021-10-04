import React from 'react';
import { Link, Route } from 'react-router-dom';
import PersonInfo from '../person-info';
import PersonFilms from '../person-films';
import PersonStarships from '../person-starships';
import './person-page.css';

const PersonPage = () => {
  return (
    <div className="person-page">
      <div className="person-info-wrap">
        <PersonInfo />
      </div>
      <div className="person-additional">
        <div className="person-additional__links">
          <Link className="person-additional__link">Фильмы</Link>
          <Link className="person-additional__link">Корабли</Link>
        </div>
        <div className="person-additional__info">
          <PersonFilms />
          <PersonStarships />
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
