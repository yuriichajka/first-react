import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPost} from "../../services/posts-services";

export default function PostDetails(props) {

    let [post, setPost] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        getPost(id).then(value => setPost({...value.data}))
    }, [id])


    return (
        <div>
            <hr/>
            {post.body}
            <hr/>
        </div>
    )
}