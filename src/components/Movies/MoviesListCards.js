import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MoviesListCard from "./MoviesListCard";


const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function MoviesListCards({item}) {
    // console.log(item.id)
    return (
        <div>
            <Link to={{
                pathname: '/movie/' + item.id,
                propsItem: item.id}}>
                <img src={IMG_API + item.poster_path} alt={item.title}/><br/>
                {item.original_title}
            </Link>
        </div>
    )
}