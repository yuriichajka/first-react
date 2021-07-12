import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w300";

export default function PosterPreview({item}) {
    return (
        <div>
            <img src={IMG_API + item.poster_path} alt={item.title}/>
        </div>
    )
}