import * as React from 'react';
import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { HOME_ROUTE, LOGIN_ROUTE } from './utils/consts';
import { AuthContext } from './contexts/AuthContext';

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;