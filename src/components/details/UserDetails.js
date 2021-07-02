import React, {useEffect, useState} from 'react';
import {getUser} from "../../services/api";
import {useParams} from 'react-router-dom'

export default function UserDetails() {

    let [user, setUser] = useState([])

    let {id} = useParams();

    useEffect(() => {
        getUser(id).then(value => {
            setUser({...value.data.data})
        })
    }, [id])

    return (
        <div>
            {user.email}
        </div>
    )
}