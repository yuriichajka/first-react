import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MoviesListCards from "./MoviesListCards";
import {Route, Switch} from "react-router-dom";
import MoviesListCard from "./MoviesListCard";

export default function MoviesList() {

    const {movies} = useSelector(state => state);
    // console.log(movies)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://api.themoviedb.org/3/movie/popular?api_key=f4716334585ea150d3157a6572afbb01')
            .then(response => response.json())
            .then(value => dispatch({type: 'SET_MOVIES', payload: value}))
    }, [])

    // console.log(movies)

    return (
        <div>
            {
                movies.map(value => <MoviesListCards key={value.id} item={value}/>)
            }
        </div>
    )
}