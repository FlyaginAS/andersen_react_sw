import React, { useState } from 'react';

const Singup = () => {
  const myStorage = window.localStorage;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit'); //worked
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter login" required />
          <input
            type="password"
            placeholder="Enter password"
            required
          />
          <button>Зарегистирироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Singup;
