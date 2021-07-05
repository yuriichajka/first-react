import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from "../posts/Posts";

export default function User({usersList, fromApp}) {
    return (
        <div>
            {usersList.name} -- <Link to={'/users/' + usersList.id} onClick={fromApp}>click</Link>

            <Route path={'/users/' + usersList.id} component={Posts}/>

        </div>
    )
}