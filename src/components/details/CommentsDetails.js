import React, {useEffect, useState} from 'react';
import {getComment} from "../../services/comments-services";
import {useParams} from 'react-router-dom';


export default function CommentsDetails() {

    let [comment, setComment] = useState([]);
    let {id} = useParams();


    useEffect(() => {
        getComment(id).then(value => setComment({...value.data})
        )
    }, [id])


    return (
        <div>
            <hr/>
            {comment.body}
            <hr/>
        </div>
    )
}