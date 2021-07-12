import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MoviesListCards from "./MoviesListCards";

export default function MoviesPage() {

    const { popularMovies, page } = useSelector(state => state);
    // console.log(movies)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=f4716334585ea150d3157a6572afbb01&page=${page}`)
            .then(response => response.json())
            .then(value => dispatch({type: 'GET_ALL_MOVIES', payload: value}))
    }, [])

    console.log(popularMovies)

    return (
        <div className="container">
            {
                popularMovies.map(value => <MoviesListCards key={value.id} item={value}/>)
            }
        </div>
    )
}