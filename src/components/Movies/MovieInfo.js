import React from 'react';
import Rating from "@material-ui/lab/Rating";

export default function MovieInfo({ filmData }) {
    return (
        <div>
            <h2>{filmData.original_title}</h2>
            <p>{filmData.overview}</p>
            <Rating value={filmData.vote_average || 0} readOnly max={10} />
        </div>
    )
}