import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import Header from '../header';
import { HomePage, PersonPage, SearchPage, Singup } from '../pages';
import { getPeople } from '../../store/peopleSlice';

import './app.css';
import Singin from '../pages/signin';

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
          <Singin />
        </Route>
        <Route path="/signup">
          <Singup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
