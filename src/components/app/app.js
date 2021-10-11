import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../header';
import {
  FavoritesPage,
  HistoryPage,
  HomePage,
  PersonPage,
  SearchPage,
  Signup,
} from '../pages';

import './app.css';
import Signin from '../pages/signin';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/person-page/:id">
          <PersonPage />
        </Route>
        <Route path="/search=:name">
          <SearchPage />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
