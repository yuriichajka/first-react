import React from 'react';

export default function GenresList({ genres }) {
    return (
        <ul className="list-inline" style={{ margin: '20px 0 20px 0'}}>
            {
                genres?.map(genre => (
                    <button
                        key={genre.id}
                        type="button"
                        className="btn btn-outline-info"
                        style={{ margin: '10px' }}
                    >
                        {genre.name}
                    </button>
                ))
            }
        </ul>
    )
}