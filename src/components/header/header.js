import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  logoutUser,
  selectUser,
} from '../../store/authorizationSlice';
import Button from '../button/button';
import './header.css';
import logo from './logo.png';

//Button будет одна на весь сайт- делаю ее полностью независимой
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onExit = () => dispatch(logoutUser());

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
        ) : (
          <React.Fragment>
            <h2 style={{ padding: '15px' }}>{user.login}</h2>
            <Link to="/favorites" className="header__button">
              <Button label="Избранное" />
            </Link>
            <Link to="/history" className="header__button">
              <Button label="История" />
            </Link>
            <Link to="/signup" className="header__button">
              <Button
                className="header__button"
                label="Выход"
                onClick={onExit}
              />
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
