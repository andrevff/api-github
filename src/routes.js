import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
          <Repositories />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
