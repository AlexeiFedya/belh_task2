import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store/store'
import ErrorBoundry from './components/error-boundry/error-boundry'
import App from './components/app/App';
import history from './history';


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router history={history}>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

