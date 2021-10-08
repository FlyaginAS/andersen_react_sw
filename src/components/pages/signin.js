import React, { useState } from 'react';
import storageService from '../../services/storage-service';

const Signin = () => {
  const { getFromStorage } = storageService;
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const signin = (log, pass) => {
    //read from localstorage
    //check password
    //write user  to state
  };

  return (
    <div>
      <h2>Войти</h2>
      <form>
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
        <button onClick={() => signin}>Войти</button>
      </form>
    </div>
  );
};

export default Signin;
