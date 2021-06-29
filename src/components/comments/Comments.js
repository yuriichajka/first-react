import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api";
import Post from "../posts/Post";
import Comment from "./Comment";
import {getComments} from "../../services/api";

export default function Comments({id}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then((value => {
            setComments(value.data)
            console.log(value.data)
        }))
    }, [])

    let filter = comments.filter(value => value.postId === id)

    return (
        <div>
            {
                filter.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}