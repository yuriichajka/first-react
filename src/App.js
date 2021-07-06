import './App.css';
import Users from "./component/Users";
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Link to={'/users'}>click</Link>

            <Switch>
                <Route path={'/users'} render={() => {return <Users/>}}/>
            </Switch>

        </Router>
    </div>
  );
}

export default App;
