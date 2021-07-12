import React from 'react';

export default function GenresList({item}) {
    return (
        // <div className="row mt-5">
        //     <div className="col">
                <ul className="list-inline">
                    <button type="button" className="btn btn-outline-info">
                        {item.name}
                    </button>
                </ul>
        //     </div>
        // </div>
    )
}