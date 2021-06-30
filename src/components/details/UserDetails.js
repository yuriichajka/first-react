import React, {useEffect, useState} from 'react';
import {getUser} from "../../services/users-services";
import {useParams} from 'react-router-dom';


export default function UserDetails(props) {

    // let {match: {params: {id}}} = props
    // console.log(id)
    let [user, setUser] = useState([]);
    let {id} = useParams();


    //
    //
    useEffect(() => {
        getUser(id).then(value => setUser({...value.data})
        )
    }, [id])

    return (
        <div>
            <hr/>
            {user.email} <br/>
            {user.name} <br/>
            {user.phone}
            <hr/>
        </div>
    )
}