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
            <section>
              <h2 style={{ textAlign: "center" }}>
                Welcome to the Photo Feed!
              </h2>
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzODYzNjI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
                alt="mountain-river"
              />
            </section>
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
