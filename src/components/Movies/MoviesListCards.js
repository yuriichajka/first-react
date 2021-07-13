import React from 'react';
import {Link} from "react-router-dom";


const IMG_API = "https://image.tmdb.org/t/p/w300";

export default function MoviesListCards({ movies }) {
    return (
        <>
            {
                movies?.map(movie => {
                    const pathToFilm = `/movie/${movie.id}`

                    return (
                        <Link to={pathToFilm}>
                            <div className="col s12 m6 l3">
                                <div className='card'>
                                    <div className="card-image">
                                        <img src={IMG_API + movie.poster_path} alt={movie.title}/>
                                        <span className="card-title">{movie.original_title}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}