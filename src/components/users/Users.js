import React, {useEffect, useState} from 'react';
import User from "./User";
import {getUsers} from "../../services/api";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((value => {
            setUsers(value.data.data)
        }))
    }, [])


    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/> )
            }
        </div>
    )
}