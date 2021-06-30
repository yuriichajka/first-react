import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import User from "./components/users/Users";
import Posts from "./components/posts/Post";
import Comments from "./components/comments/Comments";
import Users from "./components/users/Users";

function App() {
  return (
    <div>
      <Router>
        <div>
          <div><Link to={'/'}>home page</Link></div>
          <div><Link to={'/users'}>users</Link></div>
          <div><Link to={'/posts'}>posts</Link></div>
          <div><Link to={'/comments'}>comments</Link></div>
        </div>



      <Switch>
        <Route exact path={'/'} render={() => <div>ти на місці</div>}/>
        <Route exact path={'/users'} render={(props)=>{
          return <Users {...props}/>
        }}/>
        <Route path={'/posts'} render={() => <Posts/>}/>
        <Route path={'/comments'} render={() => <Comments/>}/>
      </Switch>

    </Router>

    </div>
  );
}

export default App;
