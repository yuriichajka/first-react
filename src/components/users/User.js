import React from 'react';
import '../users/User.css'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import UserDetails from "../details/UserDetails";


export default function User({item}) {
    return (
        <div className="first">
            <div className="flex">
                <div key={item.id}>
                    <p>
                        <strong>{item.first_name}</strong>
                    </p>
                    <p>{item.email}</p>
                    <img key={item.avatar} src={item.avatar} alt={'avatar'}/>
`                      <div className={'flex'}>
                            <Router>
                                <Link to={'/users/' + item.id}>Details</Link>
                                <Switch>
                                    <Route path={'/users/:id'} component={UserDetails}/>
                                </Switch>
                            </Router>
                         </div>


                </div>
            </div>
        </div>
    )
}