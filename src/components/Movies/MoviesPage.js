import React, { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { changePagination, getAllGenres, getAllMovies } from "../../redux/actions/actionsCreators";

import MoviesListCards from "./MoviesListCards";
import GenresList from "../GenresList/GenresList";

export default function MoviesPage() {
    const { genres, movies, page, totalNumberOfPages } = useSelector(state => state)
    const dispatch = useDispatch()

    // Get Genres
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f4716334585ea150d3157a6572afbb01')
            .then(response => response.json())
            .then(value => dispatch(getAllGenres(value.genres)))
    },[])

    // Get Movies by page
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/discover/movie?api_key=f4716334585ea150d3157a6572afbb01&page=${page}`)
            .then(response => response.json())
            .then(value => dispatch(getAllMovies(value)))
    }, [page])

    const handlePaginationChange = (event, value) => dispatch(changePagination(value))


    return (
        <div className="container">
            <div className="row">
                <GenresList genres={genres} />
                <div className="col s12">
                    <MoviesListCards movies={movies} key={movies.id}/>
                </div>
            </div>
            <Pagination
                count={totalNumberOfPages}
                onChange={handlePaginationChange}
                color="primary"
            />
        </div>
    )
}