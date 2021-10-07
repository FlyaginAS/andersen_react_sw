import './spinner.css';
import React from 'react';
import spin from './spinner.gif';

const Spinner = () => {
  return (
    <div>
      Spinner <img src={spin} alt="spinner" />
    </div>
  );
};

export default Spinner;
