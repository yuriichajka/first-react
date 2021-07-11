import React, {useEffect, useState} from 'react';
import {useRouteMatch} from "react-router-dom";

export default function MoviesListCard() {
    let match = useRouteMatch('/movieslistcard/:id')
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
                console.log(changedId, 'dada')
            })
    }, [])
    console.log(card)

    return (
        <div>
            {/*{*/}
            {/*    card.map(() => <div><h1>hello</h1></div>)*/}
            {/*}*/}
        </div>
    )
}