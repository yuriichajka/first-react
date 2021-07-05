import React, {useState} from 'react';

export default function Post({postsList}) {

    return (
        <div>
            {postsList.title}
        </div>
    )
}