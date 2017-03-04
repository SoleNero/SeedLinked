/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router';
import L from 'leaflet';

// material ui framework
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './style/index.css';

import routes from './routes';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
