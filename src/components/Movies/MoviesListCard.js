import React, {useEffect, useState} from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import MovieInfo from "./MovieInfo";

export default function MoviesListCard() {

    let match = useRouteMatch('/movie/:id')
    // console.log(match.params.id)
    let changedId = match.params.id;
    console.log(changedId)

    const [card, setCard] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${changedId}?api_key=f4716334585ea150d3157a6572afbb01`)
            .then(value => value.json())
            .then(value => {
                setCard(value)
                console.log(value)
                // console.log(changedId, 'dada')
            })
    }, [changedId])

    // console.log(card)



    return (
        <div>
            <h3>{card.title}</h3><br/>
            {card.overview}<br/>
            {card.runtime}<br/>

        </div>
    )
}