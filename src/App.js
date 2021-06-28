import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'/users'}>Click for users list</Link>
            </li>
            <li>
              <Link to={'/posts'}>Click for posts list</Link>
            </li>
            <li>
              <Link to={'/comments'}>Click for comments list</Link>
            </li>

            <Switch>
              <Route path={'/users'} render={() => <Users/>}/>
              <Route path={'/posts'} render={() => <Posts/>}/>
              <Route path={'/comments'} render={() => <Comments/>}/>
            </Switch>

          </ul>
        </div>
      </Router>

  );
}


