import './App.css';
import Users from "./users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useState} from "react";
import User from "./users/User";

function App() {


    return (
        <Router>
            <div>


                <Link to={'/users'}>
                    tuknu
                </Link>


                <Switch>
                    <Route path={'/users'} render={() => {
                        return <Users/>
                    }}/>
                </Switch>


            </div>
        </Router>
    )
}

export default App;
