import React, { useState } from 'react';

const Singup = () => {
  const myStorage = window.localStorage;
  console.log(myStorage);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    login: 'user1',
    parol: 'parol1',
    favorites: ['id1', 'id2'],
    history: [],
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(login, password); //worked
  };

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
        </form>
      </div>
    </div>
  );
};

export default Singup;
