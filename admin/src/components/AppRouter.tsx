import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { AUTHORIZED_ROUTE, HOME_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { MyContext } from '..';

const AppRouter = () => {
    const {auth} = useContext(MyContext);
    const [user] = useAuthState(auth);
//   const [user] = useAuthState(auth);
//   const isUserLogged = false;
console.log(user);
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key= {path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={AUTHORIZED_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key= {path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
