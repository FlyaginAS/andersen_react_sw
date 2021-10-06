import React from 'react';
import './person-info.css';

const PersonInfo = () => {
  return (
    <div className="person-info">
      <h2 className="person-info_h2">Person info</h2>
      <div className="person-info__photo-wrap">
        <img
          className="person-info__photo"
          src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
          alt="photo"
        />
      </div>
      <div className="person-info__info">
        <p>
          Name: Luke Skywalker <br />
          Height: 172 <br />
          Mass: 100kg <br />
          Hair color: blond <br />
          Skin color: fair <br />
          Eye color: blue <br />
          Birth year: 19bby <br />
          Gender: male <br />
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;
