import React from 'react';
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__buttons">
        <button className="header__button button">Вход</button>
        <button className="header__button button">Регистрация</button>
      </div>
    </div>
  );
};

export default Header;
