
import {getUsers} from "../../services/api";
import User from "./User";



import React, {useEffect, useState} from 'react';

export default function Users() {


    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]))
    })
    return (
        <div>

            {
                users.map(value => <User user={value}/>)
            }

        </div>
    )
}