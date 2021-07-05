import React, {useEffect, useState} from 'react';
import User from "./User";

export default function Users() {

    let [users, setUsers] = useState([])

    let [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])

    const fromApp = (id) => {
        setPost({...users.find(value => value.id === id)})
    }

    return (
        <div>
            {
                users.map(value => <User key={value.id} usersList={value} fromApp={fromApp}/>)
            }
        </div>
    )
}