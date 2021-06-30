import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import UserDetails from "../details/UserDetails";

export default function User({item}) {
    return (
        <Router>
            <div>
                {item.id} -- {item.name} -- <Link to={'/users/' + item.id}>details</Link>


                <Switch>
                    <Route path={'/users/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </Router>




    )
}