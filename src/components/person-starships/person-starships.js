import React, { useState, useEffect } from 'react';
import './person-starships.css';
import { apiService } from '../../services';
import Spinner from '../spinner';

const PersonStarships = ({ urls }) => {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    apiService.getPersonStarships(urls).then((starships) => {
      setStarships(starships);
    });
  }, [urls]);

  if (!starships) {
    return (
      <div className="person-starships">
        <Spinner />
      </div>
    );
  }
  if (starships.length === 0) {
    return (
      <div className="person-starships">There is no starships</div>
    );
  }

  const starshipsList = starships.map(
    ({
      name,
      manufacturer,
      starshipClass,
      costInCredits,
      length,
      hyperdriveRating,
    }) => (
      <div key={name} className="person-starships__starship">
        Name: {name} <br />
        Manufacturer: {manufacturer} <br />
        StarshipClass: {starshipClass} <br />
        Cost in credits: {costInCredits} <br />
        Length: {length} <br />
        Hyperdrive rating: {hyperdriveRating} <br />
      </div>
    )
  );

  return <div className="person-starships">{starshipsList}</div>;
};

export default PersonStarships;
