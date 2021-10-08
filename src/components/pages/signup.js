import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  selectUser,
  loginUser,
} from '../../store/authorizationSlice';
import storageService from '../../services/storage-service';

const Singup = () => {
  const { isUserRegistered, setToStorage, setLastActiveUserName } =
    storageService;
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (isUserRegistered(login)) {
      return setError('Такой пользователь уже существует!');
    }
    const user = {
      login: login,
      parol: password,
      favorites: ['1', '3', '5'],
      history: ['luk', 'dart', 'lei'],
    };

    setToStorage(login, user);
    setLastActiveUserName(login);
    setError('');
    dispatch(loginUser(user));
  };

  const user = useSelector(selectUser);

  return (
    <div>
      <h2>Регистрация</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter login"
            onChange={(evt) => setLogin(evt.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
          <button>Зарегистирироваться</button>
          {error ? <h2>{error}</h2> : null}
          {user ? <h2>вы авторизованы</h2> : null}
        </form>
      </div>
    </div>
  );
};

export default Singup;
