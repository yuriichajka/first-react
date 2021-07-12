import React from 'react';
import {Link} from "react-router-dom";


const IMG_API = "https://image.tmdb.org/t/p/w300";

export default function MoviesListCards({item}) {
    const pathToFilm = `/movie/${item.id}`

    return (
        <div>
            <Link to={pathToFilm}>
                <img src={IMG_API + item.poster_path} alt={item.title}/><br/>
                {item.original_title}
            </Link>
        </div>
    )
}