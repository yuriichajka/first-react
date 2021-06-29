import React from 'react';

export default function Comment({item}) {
    console.log(item)
    return (
        <div>
            {item.email} <br/>
            {item.body} <hr/>
        </div>
    )
}