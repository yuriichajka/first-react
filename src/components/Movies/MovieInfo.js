import React from 'react';

export default function MovieInfo({item}) {
    console.log(item)
    return (
        <div>
            <h2>{item.original_title}</h2>
            <p>{item.overview}</p>
            <div>{item.vote_average}</div>
        </div>
    )
}