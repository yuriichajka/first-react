import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {getComments} from "../../services/comments-services";

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => {
            setComments(value.data)
        })
    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}