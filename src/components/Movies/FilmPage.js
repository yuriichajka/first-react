import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import MovieInfo from "./MovieInfo";
import PosterPreview from "./PosterPreview";
import GenresList from "../GenresList/GenresList";

import { getFilmData } from '../../redux/actions/actionsCreators'

export default function FilmPage(props) {
    const filmId = props.match.params.id


    const { filmData } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=f4716334585ea150d3157a6572afbb01`)
            .then(value => value.json())
            .then(value => dispatch(getFilmData(value)))
    }, [filmId])

    return (
        <div className="d-flex container" style={{marginTop: '40px'}}>
            <PosterPreview item={filmData}/>
            <div style={{marginLeft: '50px'}}>
                <MovieInfo filmData={filmData}/>
                <GenresList genres={filmData.genres} />
            </div>

        </div>
    )
}