import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import {getPostsOfUser} from "../services/api";
import Posts from "../posts/Posts";

export default function User({item}) {


    return (
        <div>
            {item.id} -- {item.name}

                <Link to={'/users/' + item.id + '/posts'}>posts</Link>

                <Switch>
                    <Route path={'/users/' + item.id + '/posts'} render={() => {
                        return <Posts id={item.id}/>}}/>
                </Switch>

        </div>
    )
}