import React, {useState} from 'react';
import {getUsersPosts} from "../../Services/api";

export default function User({item}) {
    const [postsUser, setPostsUser] = useState([]);
    const [toggle, setToggle] = useState(false);

    const getPosts = (id) => {
        setToggle(!toggle);
        getUsersPosts(id).then(value => setPostsUser(value.data));
    }

    return (
        <div>
            <h2>
                {item.id}
            </h2>
            <h3>
                {item.name} {item.username}
            </h3>
            <p>
                {item.email}
            </p>
            <button onClick={() => getPosts(item.id)}>Enter</button>
            <ul>
                {toggle && postsUser.map(value => <li>{value.title}</li>)}
            </ul>
            <hr/>
        </div>
    )
}