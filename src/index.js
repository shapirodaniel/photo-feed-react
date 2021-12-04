import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Feed from "./Feed";
import Profile from "./Profile";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route
          exact
          path={`/`}
          component={() => (
            <h1 style={{ textAlign: "center" }}>
              Welcome to the Photo Feed! :D
            </h1>
          )}
        />
        <Route path={`/feed`} component={Feed} />
        <Route path={`/profiles/:id`} component={Profile} />
        <Route path={"*"} component={Feed} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
