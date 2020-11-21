import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const user = null;

  return (
    <div className="limiter">
      {user ? (
        <Home />
      ) : (
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
