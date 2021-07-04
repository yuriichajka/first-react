import React, {useState} from 'react';
import {getPostsOfUser} from "../../services/posts_api";
import Posts from "../posts/Posts";

export default function User({singleUser, fromApp}) {
    // console.log(singleUser)

    let [posts, setPosts] = useState([])
    const getPosts = () => {
        getPostsOfUser(singleUser.id).then(value => setPosts([...value]))
    }

    return (
        <div>
            {singleUser.name} --
            <button
                onClick={() => {
                    fromApp(singleUser.id)
                    getPosts()
                }}>click pls</button>

            <div>
                <Posts postsList={posts}/>
            </div>

        </div>
    )
}