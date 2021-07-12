import React from 'react';

export default function MovieInfo({item}) {
    console.log(item)
    return (
        <div>
            <h2>{item.belongs_to_collection.name}</h2>
            <p>{item.overview}</p>
            <div>{item.vote_averange}</div>
        </div>
    )
}