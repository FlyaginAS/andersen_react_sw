import React from 'react';

const Signin = () => {
  const signin = () => {};
  return (
    <div>
      <h2>Войти</h2>
      <form>
        <input type="text" placeholder="Enter login" required />
        <input
          type="password"
          placeholder="Enter password"
          required
        />
        <button onClick={() => signin}>Войти</button>
      </form>
    </div>
  );
};

export default Signin;
