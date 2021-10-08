import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  selectUser,
  loginUser,
} from '../../store/authorizationSlice';

const Singup = () => {
  const myStorage = window.localStorage;
  console.log(myStorage);
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const setToStorage = (name, data) => {
    const myStorage = window.localStorage;
    myStorage.setItem(name, JSON.stringify(data));
  };

  const getFromStorage = (name) => {
    const myStorage = window.localStorage;
    return JSON.parse(myStorage.getItem(name));
  };

  const isUserRegistered = (name) => {
    const myStorage = window.localStorage;
    const user = localStorage.getItem(name);
    return !!user;
  };

  const setLastActiveUserName = (name) => {
    setToStorage('lastActiveUser', name);
  };

  const getLastActiveUserName = (name) => {
    return getFromStorage('lastActiveUser');
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(login, password); //worked
    if (isUserRegistered(login)) {
      return setError('Такой пользователь уже существует!');
    }
    const user = {
      login: login,
      parol: password,
      favorites: [],
      history: [],
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
