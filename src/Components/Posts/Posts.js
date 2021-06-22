import React,{useEffect, useState} from "react";
import Post from "./Post";

export default function Posts({id}) {
    let [postsList, setPostsList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPostsList(value);
            }, [])
    })

    let filter = postsList.filter(value => value.userId === id)

    return (
        <div>
            {
                filter.map(value => <Post key={value.id} item = {value}/>)
            }
        </div>
    )
}