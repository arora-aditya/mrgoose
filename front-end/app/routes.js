import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SlackTable from './containers/SlackTable';

export default (
  <Switch>
    <Route exact path="/" component={SlackTable} />
  </Switch>
);
