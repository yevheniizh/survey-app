import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Wrapper as SurveyList } from "./SurveyList";
import { Wrapper as SurveyEditor } from "./Editor/wrapper";
import { Board } from "./Layout";

function LayoutWrapper({ Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Board>
          <Component />
        </Board>
      )}
    />
  );
}

export default () => {
  return (
    <Router>
      <Switch>
        <LayoutWrapper path="/surveys/:id" Component={SurveyEditor} />
        <LayoutWrapper path="/" Component={SurveyList} />
      </Switch>
    </Router>
  );
};
