import React, { useEffect, useState } from 'react';
import { apiService } from '../../services';
import Spinner from '../spinner';
import './person-films.css';

const PersonFilms = ({ urls }) => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    apiService.getPersonFilms(urls).then((films) => {
      setFilms(films);
    });
  }, [urls]);

  console.log(films);
  if (!films) {
    return (
      <div className="person-films">
        <Spinner />
      </div>
    );
  }

  const filmList = films.map(({ title, episode, release_date }) => (
    <div key={title} className="person-films__film">
      Title: {title} <br />
      Episode: {episode} <br />
      Release Date: {release_date} <br />
    </div>
  ));

  return <div className="person-films">{filmList}</div>;
};

export default PersonFilms;
