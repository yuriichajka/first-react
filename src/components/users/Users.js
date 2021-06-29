import React from 'react';
import User from "./User";


export default function Users({users}) {


    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}