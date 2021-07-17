/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import { Survey, UseReadDoc } from '@zzzhyrov/my-perfect-package';

const Wrapper = () => {
  // @ts-ignore
  let { id } = useParams();
  const props = {
    collection: 'surveys',
    docId: id,
    Component: Survey,
  };
  return <UseReadDoc {...props} />;
};

function LayoutWrapper({ Component, ...rest }: any) {
  return <Route {...rest} render={(props) => <Wrapper />} />;
}

export default () => {
  return (
    <Router>
      <Switch>
        <LayoutWrapper path="/surveys/:id" Component={Survey} />
        <LayoutWrapper path="/" Component={() => <h1>sorry no data</h1>} />
      </Switch>
    </Router>
  );
};
