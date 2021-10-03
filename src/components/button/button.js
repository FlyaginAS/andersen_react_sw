import React from 'react';
import './button.css';

const Button = ({ label }) => {
  return <button className="header__button button">{label}</button>;
};

export default Button;
