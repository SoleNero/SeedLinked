import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './container/App.js';
import Main from './component/Main.js';
import Navbar from './component/Navbar.js';
import MainMap from './component/MainMap.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="Navbar" component={Navbar}/>
    <Route path="Main" component={Main}/>
    <Route path="MainMap" component={MainMap}/>
  </Route>
)





