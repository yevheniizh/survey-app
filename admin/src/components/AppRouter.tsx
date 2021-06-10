import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { AUTHORIZED_ROUTE, HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const user = true;
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Redirect to={AUTHORIZED_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
