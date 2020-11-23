import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import { GlobalContext } from "./providers/GlobalProvider.jsx";

const App = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="limiter">
      {state ? (
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
