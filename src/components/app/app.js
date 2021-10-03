import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../header';
import { HomePage } from '../pages';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
