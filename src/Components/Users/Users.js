import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {
    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsersList(value);
            })
    })

    return (
        <div>
            {
                usersList.map(value => <User key={value.id} item = {value}/>)
            }
        </div>
    )




}