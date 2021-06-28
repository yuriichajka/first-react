import React from 'react';

export default function Comment({item}) {
    return (
        <div>
            user ID: {item.id} <br/>
            user name: {item.name} <br/>
            user email: {item.email} <br/>
            user's comment: {item.body}
            <hr/>
        </div>
    )
}