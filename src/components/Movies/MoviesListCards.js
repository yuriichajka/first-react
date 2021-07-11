import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";


const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function MoviesListCards({item}) {
    // console.log(item.id)
    return (
        <div>
            <Link to={{
                pathname: '/movieslistcard/' + item.id,
                propsItem: item.id}}>
                <img src={IMG_API + item.poster_path} alt={item.title}/>
                {item.original_title}
            </Link>
        </div>
    )
}