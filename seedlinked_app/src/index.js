/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './component/Main.js';
import Mymap from './component/Mymap.js';
import Navbar from './component/Navbar.js';
import './style/index.css';

import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router';
import routes from './routes';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
