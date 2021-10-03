import React from 'react';
import Button from '../button/button';
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__buttons">
        <Button label="Вход" />
        <Button label="Регистрация" />
      </div>
    </div>
  );
};

export default Header;
