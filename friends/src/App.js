import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/protected">PROTECTED</Link>
          </li>
        </ul>
        <Switch>
          {/* Protected Route */}
          <PrivateRoute exact path="/protected" component={FriendsList} />
          {/* must have both login routes in order to work */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
