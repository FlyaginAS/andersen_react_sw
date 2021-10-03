import React, { useContext } from 'react';
import { Route, Switch } from 'react-router';
import apiServiceContext from '../api-service-context';
import { HomePage, Page1 } from '../pages';

import './app.css';

const App = () => {
  const { name } = useContext(apiServiceContext);
  return (
    <div>
      <div>App, apiService name is {name}</div>
      <div style={{ backgroundColor: '#1C1E22' }}>Header</div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/page1" exact>
          <Page1 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
