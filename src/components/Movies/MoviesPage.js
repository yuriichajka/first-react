import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MoviesListCards from "./MoviesListCards";
import Pagination from "../Pagination/Pagination";

export default function MoviesPage() {

    const { genres } = useSelector(state => state)
    const dispatch1 = useDispatch()
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f4716334585ea150d3157a6572afbb01')
            .then(response => response.json())
            .then(value => dispatch1({type: 'GET_ALL_GENRES', payload: value.genres}))
    },[])
    console.log(genres)

    const { popularMovies, page } = useSelector(state => state);
    // console.log(movies)
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/discover/movie?api_key=f4716334585ea150d3157a6572afbb01&page=${page}`)
            .then(response => response.json())
            .then(value => dispatch({type: 'GET_ALL_MOVIES', payload: value}))
    }, [page])


    console.log(popularMovies)

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        popularMovies.map(value => <MoviesListCards key={value.id} item={value}/>)
                    }
                </div>
                <Pagination/>
            </div>

        </div>
    )
}