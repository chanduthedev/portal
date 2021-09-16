import PreLogin from "./components/PreLogin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={PreLogin} exact={true}></Route>
          <Route path="/signIn" component={SignIn} exact={true}></Route>
          <Route path="/signUp" component={SignUp} exact={true}></Route>
          <Route path="/dashboard" component={Dashboard} exact={true}></Route>
        </Switch>
      </Router>
      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
