import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './container/App.js';
import Main from './component/main.js';

export default (
  <Route path="/" component={App}>

    <Route path='main'component={Main}/>
  </Route>
)





// <IndexRoute component={LandingPage}/>