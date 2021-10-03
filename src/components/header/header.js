import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import './header.css';
import logo from './logo.png';

//Button будет одна на весь сайт- делаю ее полностью независимой
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" title="To Home Page" />
      </Link>
      <div className="header__buttons">
        <div className="header__button">
          <Button label="Вход" />
        </div>
        <div className="header__button">
          <Button label="Регистрация" />
        </div>
      </div>
    </div>
  );
};

export default Header;
