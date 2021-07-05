import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
    <Router>
      <div>

        <div>
          <Link to={'/users'}>click pls</Link>
        </div>

        <Switch>
          <Route path={'/users'} component={Users}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
