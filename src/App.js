import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>Click for Users</Link> <br/>
              <Link to={'/posts'}>Click for Posts</Link> <br/>
              <Link to={'/comments'}>Click for Comments</Link>


              <Switch>
                  <Route exact path={'/users'} component={Users}/>
                  <Route path={'/posts'} component={Posts}/>
                  <Route path={'/comments'} component={Comments}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
