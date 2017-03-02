import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , document.getElementById('container'));


