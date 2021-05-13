import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

export default function App() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();
  return (
    <Router>

      <p>Dashboard routes</p>
      <p>
        {path}
        ,
        {' '}
        {url}
      </p>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </Router>
  );
}
