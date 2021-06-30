import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import PostDetails from "../details/PostDetails";

export default function Post({item}) {
    return (
        <Router>
            <div>
                {item.id} -- {item.title} -- <Link to={'/posts/' + item.id}>details</Link>

                <Switch>
                    <Route path={'/posts/:id'} component={PostDetails}/>
                </Switch>
            </div>
        </Router>
    )
}