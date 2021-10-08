import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../store/authorizationSlice';
import Button from '../button/button';
import './header.css';
import logo from './logo.png';

//Button будет одна на весь сайт- делаю ее полностью независимой
const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" title="To Home Page" />
      </Link>
      <div className="header__buttons">
        {!user ? (
          <React.Fragment>
            <Link to="/signin" className="header__button">
              <Button label="Вход" />
            </Link>
            <Link to="/signup" className="header__button">
              <Button label="Регистрация" />
            </Link>
          </React.Fragment>
        ) : null}

        {user ? (
          <React.Fragment>
            <Link to="/favorites" className="header__button">
              <Button label="Избранное" />
            </Link>
            <Link to="/history" className="header__button">
              <Button label="История" />
            </Link>
            <Link to="/exit" className="header__button">
              <Button label="Выход" />
            </Link>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
