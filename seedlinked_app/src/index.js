/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router';
// npm google-maps-react

// material ui framework
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './style/index.css';

// components, routes, containers
import Main from './component/Main.js';
import Mymap from './component/Mymap.js';
import Navbar from './component/Navbar.js';
import App from './container/App.js';
import Container from './container/Container.js';
import routes from './routes';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
