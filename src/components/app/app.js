import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../header';
import { HomePage, PersonPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/person-page/" exact>
          <PersonPage />
        </Route>
      </Switch>
      <footer className="footer">Powered by FAS</footer>
    </div>
  );
};

export default App;
