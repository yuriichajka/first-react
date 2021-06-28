import React from 'react';

export default function Post({item}) {
    return (
        <div>
            user Id: {item.id} <br/>
            user title: {item.title} <br/>
            user post: {item.body}
            <hr/>
        </div>
    )
}