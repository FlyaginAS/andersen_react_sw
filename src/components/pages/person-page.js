import React, { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import PersonInfo from '../person-info';
import PersonFilms from '../person-films';
import PersonStarships from '../person-starships';
import './person-page.css';
import { useSelector } from 'react-redux';
import { selectPerson } from '../../store/peopleSlice';
import apiService from '../../services/api-service';

const PersonPage = () => {
  //хотел брать состояние из стора, но при перезагрузке странице стор обнулялся
  const { id } = useParams();
  console.log(id);
  const [person, setPerson] = useState({});

  useEffect(() => {
    apiService.getPerson(id).then((pers) => setPerson(pers));
  }, [id]);

  return (
    <div className="person-page">
      <div className="person-info-wrap">
        <PersonInfo person={person} />
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
          <Route path="/person-page/:id/films">
            <PersonFilms />
          </Route>
          <Route path="/person-page/:id/starships">
            <PersonStarships />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
