import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../header';
import { HomePage, PersonPage } from '../pages';

import './app.css';

const App = () => {
  //понял что теряю состояние в person page,попробую перенести
  //инициализацию peopleSlice на уровень app
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
      </Switch>
    </div>
  );
};

export default App;
