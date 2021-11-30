import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
/* import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; */
import App from './App';

import store from './services/redux/store';

/* import userAuth from './services/redux/user';
import sagaWatcher from './services/redux/user/saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    userAuth,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

sagaMiddleware.run(sagaWatcher); */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
