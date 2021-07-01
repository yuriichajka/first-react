import React, {useEffect, useState} from 'react';
import {getPostOfUser} from "../services/api";
import Post from "./Post";



export default function Posts({id}) {

    let [postOfUser, setPostOfUser] = useState([])
    console.log('sasda');

    useEffect(() => {
        getPostOfUser(id).then((value =>
                setPostOfUser(value.data)

        ))
    }, [])


    return (
        <div>
            {
                postOfUser && postOfUser.map(value => <Post item1={value}/>)
            }
        </div>
    )
}