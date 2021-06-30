import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/users-services";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../details/UserDetails";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((value => {
            setUsers(value.data)
        }))
    }, [])


    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }

                {/*<Route path={'/users/:id'} component={UserDetails}/>*/}

        </div>
    )
}