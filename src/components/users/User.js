import React from 'react';

export default function User({item}) {
    return (
        <div>
            {item.id} - {item.name} <br/>
            {item.username} <br/>
            {item.email} <br/>
            {item.address.street}
            <hr/>
        </div>
    )
}