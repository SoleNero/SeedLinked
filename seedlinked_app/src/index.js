/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
// import { Button, Row, Col, Icon } from './react-materialize';

import Main from './component/main.js';
import Mymap from './component/map.js';
import './style/index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';



ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
