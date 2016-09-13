import * as React from 'react';
import { Router, Route, HistoryBase, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
