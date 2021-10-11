import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import storageService from '../../services/storage-service';
import { loginUser } from '../../store/authorizationSlice';

const Signin = () => {
  const dispatch = useDispatch();
  const { getFromStorage } = storageService;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const signin = (evt) => {
    evt.preventDefault();
    //read from localstorage
    const user = getFromStorage(login);

    //check password
    if (!user) {
      setError(
        'Такой юзер не зарегистрирован. Проверьте правильность логина.'
      );
      return;
    } else if (user.password !== password) {
      setError('Неверный пароль');
      return;
    }
    //write user  to state
    dispatch(loginUser(user));
    history.push('/');
  };

  return (
    <div>
      <h2>Войти</h2>
      {error ? <h2>{error}</h2> : null}
      <form onSubmit={signin}>
        <input
          type="text"
          placeholder="Enter login"
          onChange={(evt) => setLogin(evt.target.value)}
          value={login}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          required
        />
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Signin;
