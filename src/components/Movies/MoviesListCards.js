import React from 'react';
import {Link} from "react-router-dom";


const IMG_API = "https://image.tmdb.org/t/p/w300";

export default function MoviesListCards({item}) {
    const pathToFilm = `/movie/${item.id}`

    return (
        <div>
            <Link to={pathToFilm}>
                <div className="col s12 m6 l3">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={IMG_API + item.poster_path} alt={item.title}/>
                            <span className="card-title">{item.original_title}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}