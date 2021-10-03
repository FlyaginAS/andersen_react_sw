import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/app';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from './components/error-boundry';
import { ApiServiceProvider } from './components/api-service-context';
import { apiService } from './services';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <ApiServiceProvider value={apiService}>
          <Router>
            <App />
          </Router>
        </ApiServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
