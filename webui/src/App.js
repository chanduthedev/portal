import React from "react";
import "./App.css";
import PreLoginNav from "./components/PreLoginNav";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PreLoginNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
