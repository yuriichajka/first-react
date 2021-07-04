import React from 'react';
import User from "./User";

export default function Users({usersList, fromApp}) {
    // console.log(usersList)
    return (
        <div>
            {
                usersList.map(value => <User key={value.id} singleUser={value} fromApp={fromApp}/>)
            }
        </div>
    )
}