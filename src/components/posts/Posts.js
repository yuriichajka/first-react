import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {getPosts} from "../../services/api";


export default function Posts({id}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((value => {
            setPosts(value.data)
            // console.log(value.data)
        }))
    }, [])


    let filter = posts.filter(value => value.userId === id)
    
    return (
        <div>
            {
                filter.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}