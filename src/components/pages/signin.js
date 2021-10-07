import React from 'react';

const Singin = () => {
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
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Singin;
