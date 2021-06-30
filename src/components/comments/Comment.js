import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import CommentsDetails from "../details/CommentsDetails";

export default function Comment({item}) {
    return (
        <Router>
            <div>
                {item.name} -- {item.email} -- <Link to={'/comments/' + item.id}>details</Link>

                <Switch>
                    <Route path={'/comments/:id'} component={CommentsDetails}/>
                </Switch>
            </div>
        </Router>

    )
}