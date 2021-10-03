import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" title="To Home Page" />
      </Link>
      <div className="header__buttons">
        <Button label="Вход" />
        <Button label="Регистрация" />
      </div>
    </div>
  );
};

export default Header;
