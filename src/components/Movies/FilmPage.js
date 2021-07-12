import React, {useEffect, useState} from 'react';
import MovieInfo from "./MovieInfo";
import PosterPreview from "./PosterPreview";

export default function FilmPage(props) {

    const filmId = props.match.params.id

    const [card, setCard] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=f4716334585ea150d3157a6572afbb01`)
            .then(value => value.json())
            .then(value => {
                setCard(value)
                //store
            })
    }, [filmId])
    console.log(card)


    return (
        <div className="d-flex container">
            <PosterPreview item={card}/>
            <MovieInfo item={card}/>
        </div>
    )
}