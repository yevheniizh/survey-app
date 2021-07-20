/* eslint-disable unused-imports/no-unused-vars */
import * as React from 'react';
import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  // privateRoutes,
  publicRoutes,
} from './routes';
import { HOME_ROUTE, LOGIN_ROUTE } from './utils/consts';
import { AuthContext } from './contexts/AuthContext';

import { Wrapper as SurveyEditor } from './Editor/wrapper';
import { Wrapper as SurveyList } from './SurveyList';

import { Board } from './Layout';

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  function LayoutWrapper({ Component, ...rest }: any) {
    return (
      <Route
        {...rest}
        component={() => (
          <Board>
            <Component />
          </Board>
        )}
        exact
      />
    );
  }

  return currentUser ? (
    <Switch>
      <LayoutWrapper path={'/surveys/:id'} Component={SurveyEditor} />
      <LayoutWrapper path={'/'} Component={SurveyList} />

      <Redirect to={HOME_ROUTE} exact />
      {/* {privateRoutes.map(({ path, Component }) => (
        <LayoutWrapper key={path} path={path} Component={Component} />
      ))} */}
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
