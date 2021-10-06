import React, { useEffect } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import PersonInfo from '../person-info';
import PersonFilms from '../person-films';
import PersonStarships from '../person-starships';
import './person-page.css';
import { useSelector } from 'react-redux';
import { selectPerson } from '../../store/peopleSlice';
import apiService from '../../services/api-service';

const PersonPage = () => {
  //хотел брать состояние из стора, но тогда если поделиться ссылкой
  //с человеком- то у него стор загружен не будет
  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <div className="person-page">
      <div className="person-info-wrap">
        <PersonInfo />
      </div>
      <div className="person-additional">
        <div className="person-additional__links">
          <Link to="films" className="person-additional__link">
            Фильмы
          </Link>
          <Link to="starships" className="person-additional__link">
            Корабли
          </Link>
        </div>
        <div className="person-additional__info">
          <Route path="/person-page/1/films">
            <PersonFilms />
          </Route>
          <Route path="/person-page/1/starships">
            <PersonStarships />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
