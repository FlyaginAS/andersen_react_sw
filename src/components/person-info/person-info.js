import React from 'react';
import './person-info.css';

const PersonInfo = ({
  person: {
    id,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
  },
}) => {
  return (
    <div className="person-info">
      <h2 className="person-info_h2">Person info</h2>
      <div className="person-info__photo-wrap">
        <img
          className="person-info__photo"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person info "
        />
      </div>
      <div className="person-info__info">
        <p>
          Name: {name} <br />
          Height: {height} <br />
          Mass: {mass}kg <br />
          Hair color: {hairColor} <br />
          Skin color: {skinColor} <br />
          Eye color: {eyeColor} <br />
          Birth year: {birthYear} <br />
          Gender: {gender} <br />
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;
