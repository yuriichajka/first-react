import React, {useEffect, useState} from 'react';
import {getUser} from "../services/api";
import User from "./User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUser().then(value => {
            setUsers([...value.data])
        })
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}